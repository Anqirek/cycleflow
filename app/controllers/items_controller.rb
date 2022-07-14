class ItemsController < ApplicationController
skip_before_action :authorize, except: :index

    def index
     items = Item.all
     render json: items, status: :ok
    end

    def update
        item = Item.find_by(id: params[:id])
      if item
        item.update(item_params)
        render json: item
      else
        render json: { error: "Item not found" }, status: :not_found
      end
     end
    end

    private

    def item_params
     params.permit(:item, :bottle, :size, :count)
    end

end