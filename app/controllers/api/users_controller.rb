class Api::UsersController < ApplicationController

  def categories
    render json: Exercise.distinct.pluck(:category)
  end

  def user_submissions
    render json: User.user_submissions(User.first().id)
  end

end
