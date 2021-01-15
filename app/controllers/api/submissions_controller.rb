class Api::SubmissionsController < ApplicationController
  before_action :authenticate_user!
  # before_action :set_test_user
  before_action :set_level
  before_action :set_submission, only: [:update, :destroy, :show]
  

  def index
    render json: @level.submissions.all
  end

  def show
    render json: @submission
  end

  def create 
   submission = @level.submissions.new(submission_params)
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
    params.require(:submission).permit(:completed, :name, :video_upload, :user_id)
  end

  def set_level
    @level = Level.find(params[:level_id])
  end

  def set_submission
    @submission = @level.submissions.find(params[:id])
  end

  # def set_test_user 
  #   @level = User.first
  # end


end
