class Exercise < ApplicationRecord
  belongs_to :admin
  has_many :levels, dependent: :destroy

  #FOR THE USER SIDE "AllExercises.js"

  # def self.exercise_levels(activity, category)
  #   # self.find_by_sql(["select e.id as exercise_id, l.id as level_id, category, activity, description, how_to_video, image, l.name as level_name, measurement, reps, sets, multiplier, metric, timeframe from exercises e
  #   #   inner join levels l on l.exercise_id = e.id"])
  #     select("exercises.id as exercise_id, l.id as level_id, category, activity, description, how_to_video, image, l.name as level_name, measurement, reps, sets, multiplier, metric, timeframe")
  #       .joins("inner join levels l on l.exercise_id = exercises.id")
  #       .where("exercises.activity like '%#{activity}%' and exercises.category like '%#{category}%'")
  # end

 
  def self.exercise_levels(activity, category, user_id)
    self.find_by_sql ["
      Select *
      From(
          select
          exercises.id as exercise_id, 
          l.id as level_id, 
          case 
              when (select STRING_AGG(status, '|') from Submissions s where s.level_id = l.id and user_id = #{user_id}) isnull 
          then concat(l.name,' is Null') 
              else CONCAT_WS(' ',(select STRING_AGG(status, '|') from Submissions s where s.level_id = l.id and user_id = #{user_id}),l.name)
              end as status,
          case 
              when (select STRING_AGG(status, '|') from Submissions s where s.level_id = l.id and user_id = #{user_id}) isnull 
          then concat('No Submission') 
              else (select STRING_AGG(status, '|') from Submissions s where s.level_id = l.id and user_id = #{user_id})
              end as user_status,
          category, 
          activity, 
          description, 
          how_to_video, 
          image, 
          l.name as level_name,
          case when l.name like 'Initiated' then 1 
              when l.name like 'Committed' then 2
              when l.name like 'Proven' then 3
              else 1000
              end as intensity_level,
          measurement, 
          reps, 
          sets, 
          multiplier, 
          metric, 
          timeframe
          from exercises
          inner join levels l on l.exercise_id = exercises.id
          WHERE exercises.activity like '%#{activity}%'
              and exercises.category like '%#{category}%'
          ) as ExerLevels
          order by 1,11"]
  end

  #FOR THE ADMIN SIDE "Exercises.js"

  def self.exercise_levels_by_admin(admin_id, activity, category)
    # self.find_by_sql(["select e.id as exercise_id, l.id as level_id, category, activity, description, how_to_video, image, l.name as level_name, measurement, reps, sets, multiplier, metric, timeframe from exercises e
    #   inner join levels l on l.exercise_id = e.id"])
      select("exercises.admin_id as admin_id, exercises.id as exercise_id, l.id as level_id, category, activity, description, how_to_video, image, l.name as level_name, measurement, reps, sets, multiplier, metric, timeframe, exercises.updated_at")
        .joins("full outer join levels l on l.exercise_id = exercises.id")
        .where("admin_id = #{admin_id} and exercises.activity like '%#{activity}%' and exercises.category like '%#{category}%'")
        .order("exercises.updated_at desc")
  end

  def self.exercise_levels_by_admin_distinct(admin_id, activity, category)
    # self.find_by_sql(["select e.id as exercise_id, l.id as level_id, category, activity, description, how_to_video, image, l.name as level_name, measurement, reps, sets, multiplier, metric, timeframe from exercises e
    #   inner join levels l on l.exercise_id = e.id"])
      select("exercises.admin_id as admin_id, exercises.id as exercise_id, l.id as level_id, category, activity, description, how_to_video, image, l.name as level_name, measurement, reps, sets, multiplier, metric, timeframe, exercises.updated_at")
        .joins("full outer join levels l on l.exercise_id = exercises.id")
        .where("admin_id = #{admin_id} and exercises.activity like '%#{activity}%' and exercises.category like '%#{category}%'")
        # .where("admin_id = ?", admin_id)
        # .order("exercises.updated_at desc")
  end
end
