class ItemsController < ApplicationController
skip_before_action :authorize, except: :index

    def index
     items = Item.all
     render json: items, status: :ok, include: :customer
    end

    def show
        item=Item.find_by(id:session[:id])
    if  item
        render json: item
    else
        render json: {error: 'Not Found'}, status: :not_found
        end
    end

    def update
        item = Item.find(id:params[:id])
      if item
         item.update(item_params)
         render json: item
      else
        render json: { error: "Item not found" }, status: :not_found
      end
    end

    private

    def item_params
     params.permit(:bottle, :size, :count)
    end

end