class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception


    def login(user)
        session[:session_token] = user.reset_token!
        @current_user = user
      end
end
