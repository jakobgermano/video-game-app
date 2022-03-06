class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :game_id
  belongs_to :user, serializer: UserSerializer
  belongs_to :game, serializer: GameSerializer
end
