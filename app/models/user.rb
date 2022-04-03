class User < ApplicationRecord
    # has_many :reviews
    # has_many :games, through: :reviews

    has_many :games

    has_secure_password

    
    validates :username, presence: true, uniqueness: true, length: {in: 2..20}
end
