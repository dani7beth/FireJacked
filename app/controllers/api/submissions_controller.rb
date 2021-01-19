class Api::SubmissionsController < ApplicationController
  before_action :authenticate_user!
  # before_action :set_test_user
  before_action :set_level
  before_action :set_submission, only: [:update, :destroy, :show]

  def basic_upload
    file = params[:file]
    if file
      begin
        # ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
        # user.image = cloud_image['secure_url']
        render json: { yo: "worked", file: file, cloud_image: cloud_image }
      rescue => e
        render json: { errors: e }, status: 422
        return
      end
    end
  end  

  def index
    level = current_user.levels.find(params[:level_id])
    render json: level.submissions
  end

  # def all_submissions

  # end

  def show
    render json: @submission
  end

  def create 
   submission = current_user.submissions.new(submission_params)
    if submission.save
      render json: submission
    else
      render json: {errors: submission.errors}, status: 422
    end
  end

  def update
    @submission.update(submission_params)
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
