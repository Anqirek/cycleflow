class ItemsController < ApplicationController
skip_before_action :authorize, except: :index

    def index
     items = Item.all
     render json: items, status: :ok
    end
end