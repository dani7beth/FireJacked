class Api::SubmissionsController < ApplicationController
  before_action :authenticate_user!
  # before_action :set_test_user
  before_action :set_submission, only: [:update, :destroy, :show]
  

  def index
    render json: current_user.submissions.all
  end

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

  def set_submission
    @submission = current_user.submissions.find(params[:id])
  end

  # def set_test_user 
  #   current_user = User.first
  # end


end
