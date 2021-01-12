class Api::ExercisesController < ApplicationController
  before_action :authenticate_admin!, only: [:create, :update, :destroy]
  before_action :set_admin, only: [:create, :update, :destroy]
  before_action :set_exercise, only: [:update, :destroy]

  def index
    render json: Exercise.all
  end

  def create 
   exercise = @admin.new(exercise_params)
    if @exercise.save
      render json: exercise
    else
      render json: {errors: exercise.errors}, status: 422
    end
  end

  def update
    @exercise.update(exercise_params)
    render json: @exercise
  end

  def destroy
    @exercise.destroy
    render json: @exercise
  end

  private
  def exercise_params
    params.require(:exercise).permit(:name, :image, :how_to_video, :category, :activity)
  end
  def set_exercise
    @exercise = Exercise.find(params[:id])
  end
  def set_admin
    @admin = Admin.find(params[:admin_id])
  end
end
