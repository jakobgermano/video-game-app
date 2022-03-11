class UsersController < ApplicationController
    def index 
        users = User.all
        render json: users, include: :games
    end

    # def show
    #     render json: @current_user
    #  end

    def create
        user = User.create(user_params)
        if driver.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end 
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end

end
