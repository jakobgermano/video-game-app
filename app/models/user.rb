class User < ApplicationRecord
    has_many :games
    # has_many :reviews, through: :games

    has_secure_password

    # validates :password, presence: true
    # validates :username, presence: true, uniqueness: true
end
