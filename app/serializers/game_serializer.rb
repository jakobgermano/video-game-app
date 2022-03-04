class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :genre, :user_id
  belongs_to :user, serializer: UserSerializer
end
