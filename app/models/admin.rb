# frozen_string_literal: true

class Admin < ActiveRecord::Base
  extend Devise::Models
  has_many :exercises
  has_many :comments
  has_many :submissions, through: :comments
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

end
