# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
  
  has_many :submissions
  has_many :levels, through: :submissions

  def self.user_submissions(userID)
    self.find_by_sql ["Select s.id as submission_id, 
      e.id as exercise_id, 
      l.id as level_id, 
      u.id as user_id,
      u.weight,
      category, 
      activity, 
      description, 
      e.image as image, 
      how_to_video,
      l.name as level_name, 
      multiplier, 
      metric, 
      measurement,
      CASE WHEN measurement LIKE '%Bodyweight%' THEN (multiplier * u.weight) END AS goal,
      reps, 
      sets, 
      timeframe, 
      completed,
      status,
      video_upload,
      s.created_at,
      s.updated_at
      from submissions s
      inner join users u on u.id = s.user_id
      inner join levels l on l.id = s.level_id
      inner join exercises e on e.id = l.exercise_id
      
      where User_id = ?
      order by 2,3", userID]
  end
end
