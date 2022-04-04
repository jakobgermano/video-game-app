Rails.application.routes.draw do

  resources :users
  resources :games
  resources :reviews

  get "/filter", to: "games#filter"
  
  get "/me", to: "users#show"
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post "/signup", to: "users#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
