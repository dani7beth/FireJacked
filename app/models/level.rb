class Level < ApplicationRecord
  belongs_to :exercise
  has_many :submissions
  has_many :users, through: :submissions
end
