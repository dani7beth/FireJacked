class Api::AdminsController < ApplicationController
  before_action :authenticate_admin!, only: [:update_admin]

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

  def update_admin
    file = params[:image]
    if file
      begin
      cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
      @admin.update(
        first_name: params[:first_name], 
        last_name: params[:last_name], 
        email: params[:email], 
        phone: params[:phone],
        speciality: params[:speciality],  
        image: cloud_image['secure_url']
                  )
        render json: @admin
      rescue => e
        render json: {errors: e}, status: 422
        return
      end 
    end
  end

  ## first_name, last_name, email, phone, speciality, image

  private

  private

  def submission_params
    params.permit(:completed, :name, :video_upload, :level_id)
  end

  def admin_params
    params.permit(:first_name, :last_name, :email, :phone, :speciality, :image)
  end

  def set_admin
    @admin = current_admin
  end

end
