class Api::UsersController < ApplicationController
  before_action :authenticate_user!, except: [:categories, :user_submissions]

  def categories
    render json: Exercise.distinct.pluck(:category)
  end

  def user_submissions
    render json: User.user_submissions(User.first().id)
  end

 

  def update_user
    
  end
end
