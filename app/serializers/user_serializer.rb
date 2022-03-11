class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password
  has_many :games, serializer: GameSerializer
  # has_many :reviews, serializer: ReviewSerializer
end