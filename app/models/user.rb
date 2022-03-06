class User < ApplicationRecord
    has_many :games
    has_many :reviews, through: :games

    has_secure_password
end
