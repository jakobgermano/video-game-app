class UserMailer < ApplicationMailer

    def welcome_email
      @user = params[:user],params[:username], params[:email]
      @url  = '/signup'
      mail(to: @user.try(:email), subject: 'Welcome to My Awesome Site')
  end
end
