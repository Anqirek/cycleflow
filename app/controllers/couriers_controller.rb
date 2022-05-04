class CouriersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
skip_before_action :authorize, only: :create
        
    def index
     courier = Courier.all
     render json: courier, status: :ok
    end

    def create
     courier = Courier.create!(courier_params)
     session[:courier_id] = courier.id
     render json: courier, status: :created
    end

    def show
        courier = Courier.find_by(id:session[:courier_id])
     if courier
        render json: courier
     else
        render json: {error: 'Not Authorized'}, status: :unauthorized
     end
    end

    
    private

    def courier_params
     params.permit(:name,:email,:password, :address, :rating)
    end
    

    def authorize
     return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :courier_id
    end

    def render_not_found
     render json: {error: 'Courier not found.'}, status: :not_found
    end   
end
