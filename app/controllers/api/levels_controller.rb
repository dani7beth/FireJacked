class Api::LevelsController < ApplicationController
    before_action :authenticate_admin!, except: [:index, :show]
    before_action :set_exercise, only: [:create, :update, :destroy, :show, :index]
    before_action :set_level, only: [:update, :destroy, :show]

    def index
      render json: @exercise.levels.all
    end
  
    def show
      render json: @level
    end
  
    def create 
     level = @exercise.levels.new(level_params)
      if level.save
        render json: level
      else
        render json: {errors: level.errors}, status: 422
      end
    end
  
    def update
      @level.update(level_params)
      render json: @level
    end
  
    def destroy
      @level.destroy
      render json: @level
    end
  
    private
    def level_params
      params.require(:level).permit(:name, :measurement, :reps, :timeframe, :sets)
    end

    def set_level
      @level = @exercise.levels.find(params[:id])
    end

    def set_exercise
      @exercise = Exercise.find(params[:exercise_id])
    end

end
