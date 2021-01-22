class Api::ExercisesController < ApplicationController
  before_action :authenticate_admin!, except: [:all_exercises, :show, :index, :create, :update]
  # before_action :set_admin, only: [:create, :update, :destroy, :show, :index]
  before_action :set_exercise, only: [:update, :destroy]
  before_action :set_page

 

  def index
    render json: current_admin.exercises.all
  end

  def all_exercises
    all_exercises = Exercise.page(@page).all
    render json: {data: Exercise.page(@page).all, total_pages: all_exercises.total_pages}
  end

  def show
    render json: Exercise.find(params[:id])
  end

  def create 
    # exercise = current_admin.exercises.new(exercise_params)
    file = params[:image]
    if file
      begin
        # ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
        # user.image = cloud_image['secure_url']
        exercise = current_admin.exercises.new(image: cloud_image['secure_url'], name: params[:name], how_to_video: params[:how_to_video], category: params[:category], activity: params[:activity])
      rescue => e
        render json: { errors: e }, status: 422
        return
      end
    end
    

    if exercise.save
      render json: exercise
    else
      render json: {errors: exercise.errors}, status: 422
    end

  end

  def update
    file = params[:image]
    if file
      begin
      cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
      @exercise.update(image: cloud_image['secure_url'], name: params[:name], how_to_video: params[:how_to_video], category: params[:category], activity: params[:activity])
      rescue => e
        render json: {errors: e}, status: 422
        return
      end 
    end
    render json: @exercise
  end


  def destroy
    @exercise.destroy
    render json: @exercise
  end

  private
  def exercise_params
    params.permit(:name, :image, :how_to_video, :category, :activity)
  end
  def set_exercise
    @exercise = current_admin.exercises.find(params[:id])
  end

  def set_page
    @page = params[:page] || 1
  end
  # def set_admin
  #   # @admin = Admin.find(params[:admin_id])
  #   @admin = current_admin
  # end
end
