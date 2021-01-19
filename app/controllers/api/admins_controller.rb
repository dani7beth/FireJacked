class Api::AdminsController < ApplicationController
  before_action :authenticate_admin!

  def all_submissions
    render json: Submission.all
  end

  def single_submission
    render json: Submission.find(params[:submission_id])
  end

  def update_submission
    user = User.find(params[:user_id])
    submission = user.submissions.find(params[:submission_id])
    x = submission.update(submission_params)
    
    render json: x
  end

  private

  private
  def submission_params
    params.permit(:completed, :name, :video_upload, :level_id)
  end

end
