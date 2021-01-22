class Api::AdminsController < ApplicationController
  before_action :authenticate_admin!
  before_action :set_page

  def all_submissions
    submissions = Submission.page(@page).all
    render json: {data: Submission.page(@page).all, total_pages: submissions.total_pages}
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

  def set_page
    @page = params[:page] || 1
  end

end
