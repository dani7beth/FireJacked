class Comment < ApplicationRecord
  belongs_to :admin
  belongs_to :submission

  def self.comments_by_submission(submission_id)
      select('comments.id,
            comments.body,
            comments.created_at,
            comments.updated_at,
            comments.submission_id,
            submissions.id,
            comments.admin_id,
            admins.first_name as admin_first,
            admins.last_name as admin_last,
            admins.image as admin_image
            '
          )
          .joins('inner join submissions on submissions.id = comments.submission_id')
          .joins('inner join admins on admins.id = comments.admin_id')
          .where('submissions.id = ? ', submission_id)
  end
end