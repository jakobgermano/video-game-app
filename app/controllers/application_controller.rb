class ApplicationController < ActionController::API
include ActionController::Cookies
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_error

before_action :authorize

 def render_not_found_error(error)
    render json: {error: "record not found"}, status: :not_found
 end

private

def authorize
    @current_user = User.find(session[:user_id])
    render json: {errors: "Not authorized"}, status: unauthorized unless @current_user
 end
end
