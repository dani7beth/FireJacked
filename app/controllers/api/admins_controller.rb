class Api::AdminsController < ApplicationController
  before_action :authenticate_admin!, only: [:update_admin_image, :update]
  before_action :set_page
  before_action :set_admin, only: [:show]

  def show
    render json: @admin
  end

  def user_index
    render json: User.all
  end

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

  def update
    if @current_admin.update(admin_params)
      render json: @current_admin
    else 
      render json: @current_admin.error, status: 422
    end
  end

  def update_admin_image
    file = params[:image]
    if file
      begin
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
        current_admin.update(image: cloud_image['secure_url'])
      rescue => e
        render json: {errors: e}, status: 422
        return
      end 
    end
    render json: current_admin
  end

  ## first_name, last_name, email, phone, speciality, image

  private

  def submission_params
    params.permit(:completed, :name, :video_upload, :level_id)
  end

  # def admin_image_params
  #   params.require(:admin).permit(:image)
  # end

  def admin_params
    params.require(:admin).permit(:first_name, :last_name, :email, :phone, :speciality, :image, :user_id)
  end

  def set_page
    @page = params[:page] || 1
  end

  def set_admin
    @admin = Admin.find(params[:id])
  end

end
