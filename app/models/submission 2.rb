class Submission < ApplicationRecord
  belongs_to :level
  belongs_to :user
  has_many :comments
  has_many :admins, through: :comments
end
