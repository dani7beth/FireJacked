class Api::SubmissionsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_admin, only: [:create, :update, :destroy, :show, :index]
  before_action :set_exercise, only: [:update, :destroy, :show]

  def index
    render json: current_user.submissions.all
  end

  def show
    render json: @exercise
  end

  def create 
   exercise = @admin.exercises.new(exercise_params)
    if exercise.save
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
  def submission_params
    params.require(:submission).permit(:completed, :name, :video_upload)
  end
  def set_submission
    @exercise = @admin.exercises.find(params[:id])
  end

end
