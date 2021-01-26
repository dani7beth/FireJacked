class Api::SubmissionsController < ApplicationController
  before_action :authenticate_user!, except: [:exercise_subs]
  before_action :authenticate_admin!, only: [:exercise_subs]
  # before_action :set_test_user
  before_action :set_level, except: [:all_users_submissions, :exercise_subs]
  before_action :set_submission, only: [:update, :destroy, :show]
 

  def index
    level = Level.find(params[:level_id])
    render json: level.submissions.where(user_id: current_user.id)
  end

  def all_users_submissions
    render json: current_user.submissions.all
  end

  def exercise_subs
    sub_exercise = Exercise.find(params[:exercise_id])
    # sub_exercise = Exercise.find(1)
    @submissions = Submission.submissions_by_exercise(sub_exercise.id)
    render json: @submissions
  end 

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
    file = params[:video_upload]
    if file
      begin
        cloud_video = Cloudinary::Uploader.upload_large(file, public_id: file.original_filename, secure: true, resource_type: :video)
       submission = @submission.update(video_upload: cloud_video['secure_url'],completed: params[:completed],name: params[:name],level_id: params[:level_id])
      rescue => e
        render json: {errors: e}, status: 422
        return
      end
    end
    render json: submission
  end

  def destroy
    @submission.destroy
    render json: @submission
  end

  private

  def submission_params
    params.require(:submission).permit(:completed, :name, :video_upload, :level_id, :user_id)
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
