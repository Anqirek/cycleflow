Rails.application.routes.draw do
 get '/hello', to: 'application#hello_world'
 get '/me', to: 'couriers#show'
 get "/home", to: 'couriers#show'
 get '/courier', to: 'couriers#show'
 get '/items', to: 'items#index'

 post '/', to: 'sessions#create'
 post '/signupform', to: 'couriers#create'

 delete '/logout', to: 'sessions#destroy'

end
