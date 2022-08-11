Rails.application.routes.draw do

 resources :items, only: [:index,:show,:update]
 

 get '/me', to: 'couriers#show'
 get '/courier', to: 'couriers#show'
 get '/items/', to: 'items#show'
 get '/items/:id', to: 'items#update'
 get '/item/', to: 'items#show'
 get '/item/:id', to: 'items#show'
 get '/customers/', to: 'customers#index'

 patch '/items/', to: 'items#show'
 patch '/items/:id', to: 'items#update'
 
 post '/login', to: 'sessions#create'
 post '/signupform', to: 'couriers#create'
 post '/items/', to: 'items#create'
 post '/customers/', to: 'customers#index'

 delete '/logout', to: 'sessions#destroy'

end
