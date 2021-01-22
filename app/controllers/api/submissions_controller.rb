class Api::SubmissionsController < ApplicationController
  before_action :authenticate_user!
  # before_action :set_test_user
  before_action :set_level
  before_action :set_submission, only: [:update, :destroy, :show]
 

  def index
    level = Level.find(params[:level_id])
    render json: level.submissions
  end

  # def all_submissions

  # end

  def show
    render json: @submission
  end

  def create 
    file = params[:video_upload]
    if file
      begin
        cloud_video = Cloudinary::Uploader.upload_large(file, public_id: file.original_filename, secure: true, resource_type: :video)
        submission = current_user.submissions.new(video_upload: cloud_video['secure_url'],completed: params[:completed],name: params[:name],level_id: params[:level_id])
      rescue => e
        render json: {errors: e}, status: 422
        return
      end
    end
    if submission.save
      render json: submission
    else
      render json: {errors: submission.errors}, status: 422
    end
  end

  def update
    file = params[:image]
    if file
      begin
        cloud_video = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
        submission = current_user.submissions.update(completed: params[:completed],name: params[:name],video_upload: cloud_video['secure_url'],level_id:[:level_id])
      rescue => e
        render json: {errors: e}, status: 422
        return
      end
    end
    render json: @submission
  end

  def destroy
    @submission.destroy
    render json: @submission
  end

  private
  def submission_params
    params.require(:submission).permit(:completed, :name, :video_upload, :level_id)
  end

  def set_level
    @level = Level.find(params[:level_id])
  end

  def set_submission
    @submission = current_user.submissions.find(params[:id])
  end

  # def set_test_user 
  #   @level = User.first
  # end


end
