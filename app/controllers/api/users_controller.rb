class Api::UsersController < ApplicationController
  before_action :authenticate_user!, except: [:categories, :user_submissions,:update,:update_user_image]

  def categories
    render json: Exercise.distinct.pluck(:category)
  end

  def user_submissions
    render json: User.user_submissions(User.first().id)
  end

  def update_user_image
    file = params[:image]
    if file
      begin
      cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
      current_user[:image] = cloud_image['secure_url']
      rescue => e
        render json: {errors: e}, status: 422
      end
    end
    render json: current_user
  end

  def update
    if current_user.update(user_params)
     render json: current_user
    else
      render json: {errors: e}, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name,:last_name,:weight, :height, :email, :gender, :about, :age, :image)
  end
end
