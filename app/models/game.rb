class Game < ApplicationRecord
     belongs_to :user

     def self.by_names
          games = Game.all.order(name: :asc)
     end
end
