class CustomersController < ApplicationController

    def index
        customer = Customer.all
        render json: customer, status: :ok
    end

    def show
            customer = Customer.find_by(id:session[:customer_id])
        if  customer
            render json: customer
        else
            render json: {error: 'Not Authorized'}, status: :unauthorized
        end
    end

    def create
        customer = Customer.create!(customer_params)
        session[:customer_id] = customer.id
        render json: courier, status: :created
       end

private

    def customer_params
     params.permit(:username)
    end
    
end
