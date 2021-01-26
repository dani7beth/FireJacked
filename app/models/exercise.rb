class Exercise < ApplicationRecord
  belongs_to :admin
  has_many :levels, dependent: :destroy

  def self.exercise_levels
    # self.find_by_sql(["select e.id as exercise_id, l.id as level_id, category, activity, description, how_to_video, image, l.name as level_name, measurement, reps, sets, multiplier, metric, timeframe from exercises e
    #   inner join levels l on l.exercise_id = e.id"])
      select("exercises.id as exercise_id, l.id as level_id, category, activity, description, how_to_video, image, l.name as level_name, measurement, reps, sets, multiplier, metric, timeframe")
        .joins("inner join levels l on l.exercise_id = exercises.id")
  end

  def self.exercise_levels_by_admin(admin_id)
    # self.find_by_sql(["select e.id as exercise_id, l.id as level_id, category, activity, description, how_to_video, image, l.name as level_name, measurement, reps, sets, multiplier, metric, timeframe from exercises e
    #   inner join levels l on l.exercise_id = e.id"])
      select("exercises.admin_id as admin_id, exercises.id as exercise_id, l.id as level_id, category, activity, description, how_to_video, image, l.name as level_name, measurement, reps, sets, multiplier, metric, timeframe")
        .joins("inner join levels l on l.exercise_id = exercises.id")
        .where("admin_id = ?", admin_id)
  end
end
