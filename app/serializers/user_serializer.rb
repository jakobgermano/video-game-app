class UserSerializer < ActiveModel::Serializer
   attributes :id, :username, :password
   has_many :games
  # has_many :reviews
end
