class Api::UsersController < ApplicationController

  def categories
    render json: Exercise.distinct.pluck(:category)
  end
  
end
