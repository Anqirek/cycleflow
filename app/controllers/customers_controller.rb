class CustomersController < ApplicationController

    def show 
        item = Item.find_by(id: params[:id])
     if item 
         render json: item 
     else 
         render json: { error: "Item does not exist" }, status: :not_found
     end
  end
end
