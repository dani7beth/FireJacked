class Api::SubmissionsController < ApplicationController
  before_action :authenticate_user!, except: [:exercise_subs, :all_submissions_of_user, :update_status, :update, :user_see_history]
  before_action :authenticate_admin!, only: [:update]
  before_action :set_level, except: [:all_users_submissions, :exercise_subs, :all_users_submissions, :all_submissions_of_user, :update_status, :user_see_history]
  before_action :set_submission, only: [:update, :destroy, :show]
  before_action :set_user, only: [:all_submissions_of_user, :update_status]
  before_action :set_page, only: [:user_see_history]
  # before_action :set_test_user

  def index
    level = Level.find(params[:level_id])
    render json: level.submissions.where(user_id: current_user.id)
  end

  def all_submissions_of_user
    render json: @user.submissions.all
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

  def user_see_history
    sub_exercise = Exercise.find(params[:exercise_id])
    submissions = current_user.submissions.page(@page).user_see_history(sub_exercise.id)
    render json: {
      data: submissions,
      total_pages: submissions.total_pages,
      total_length: submissions.length
    }
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

  def update_status
    submission = @user.submissions.find(params[:submission_id])
    submission.update(submission_params)
    render json: submission
  end

  def update
    file = params[:video_upload]
    if file
      begin
        cloud_video = Cloudinary::Uploader.upload_large(file, public_id: file.original_filename, secure: true, resource_type: :video)
        submission = @submission.update(video_upload: cloud_video['secure_url'],status: params[:status],name: params[:name],level_id: params[:level_id])
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
    params.require(:submission).permit(:completed, :name, :video_upload, :level_id, :user_id, :status, :id, :created_at, :updated_at)
  end

  def set_level
    @level = Level.find(params[:level_id])
  end

  def set_submission
    @submission = current_user.submissions.find(params[:id])
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_page
    @page = params[:page] || 1
  end

  # def set_test_user 
  #   @level = User.first
  # end
end
