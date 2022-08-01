Rails.application.routes.draw do

 resources :items, only: [:index,:show,:update]
 

 get '/me', to: 'couriers#show'
 get "/home", to: 'couriers#show'
 get '/courier', to: 'couriers#show'
 get '/items', to: 'items#index'
 get 'items/:id', to: 'items#update'

 patch '/items/:id', to: 'items#update'

 post '/login', to: 'sessions#create'
 post '/signupform', to: 'couriers#create'

 delete '/logout', to: 'sessions#destroy'

end
