class Level < ApplicationRecord
  belongs_to :exercise
  has_many :submissions, dependent: :destroy
  has_many :users, through: :submissions
end
