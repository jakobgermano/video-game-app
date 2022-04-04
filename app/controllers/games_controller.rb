class GamesController < ApplicationController
    skip_before_action :authorize

    def filter
        @current_user = custom_paths
        games = @current_user.games.by_names
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

    def destroy
        game = Game.find(params[:id])
        game.destroy
    end

    private 
    def custom_paths
       User.find(session[:user_id])
    end

    def game_params
        params.require(:game).permit(:name, :rating, :genre, :user_id)
    end


end
