class Exercise < ApplicationRecord
  belongs_to :admin
  has_many :levels
end
