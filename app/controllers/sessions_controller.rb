class SessionsController < ApplicationController
 skip_before_action :authorize, only: :create, :raise => false

    def create
        courier = Courier.find_by(name: params[:name])
     if courier&.authenticate(params[:password])
        session[:courier_id] = courier.id
        render json: courier
     else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
    
        def destroy
           session.delete :courier_id
           head :no_content
        end
    
        private
    
        def authorize
          return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :courier_id
        end
end
