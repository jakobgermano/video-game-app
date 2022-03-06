class GamesController < ApplicationController
    def index
        games = Game.all
        render json: games, include: :review
    end
end
