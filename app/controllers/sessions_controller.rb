class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        if (user&.authenticate(params[:password]))
            session[:user_id] = user.id
            render json: driver, status: :created_at
        else
            render json: { error: "Invalid username or password"}, status: :unauthorized
        end
    end
    
    def destroy
        session.delete :driver_id
        head :no_content
    end
end
