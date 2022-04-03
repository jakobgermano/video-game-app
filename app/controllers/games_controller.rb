class GamesController < ApplicationController
    skip_before_action :authorize

    def filter
         games = Game.order(name: :desc)
         render json: games
    end

    def show
        game = Game.find_by(params[:id])
        render json: game
    end

    def index
        games = Game.all
        render json: games
    end

    def create
        game = Game.create(game_params)
        render json: game
    end

    def update
        game = Game.find(params[:id])
        game.update(game_params)
        render json: game
    end

    # def update
    #     game = Game.find(params[:id])
    #     if @current_user.id == game.user_id
    #     game.update(game_params)
    #     render json: game
    #     end
    # end

    def destroy
        game = Game.find(params[:id])
        game.destroy
    end

    private 

    def game_params
        params.require(:game).permit(:name, :rating, :genre, :user_id)
    end


end
