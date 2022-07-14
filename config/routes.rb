Rails.application.routes.draw do

 get '/me', to: 'couriers#show'
 get "/home", to: 'couriers#show'
 get '/courier', to: 'couriers#show'
 get '/items', to: 'items#index'

 patch '/items/:id', to: 'items#update'

 post '/', to: 'sessions#create'
 post '/SignupForm', to: 'couriers#create'

 delete '/logout', to: 'sessions#destroy'

end
