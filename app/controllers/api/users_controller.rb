class Api::UsersController < ApplicationController
  before_action :authenticate_user!, except: [:categories, :user_submissions,:update]

  def categories
    render json: Exercise.distinct.pluck(:category)
  end

  def user_submissions
    render json: User.user_submissions(User.first().id)
  end

  def update_user
    
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
