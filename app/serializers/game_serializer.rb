class GameSerializer < ActiveModel::Serializer
   attributes :id, :name, :rating, :genre, :user_id
   belongs_to :user
   # has_many :reviews
end
