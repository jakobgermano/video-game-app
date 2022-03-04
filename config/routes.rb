Rails.application.routes.draw do

  resources :users
  resources :games
  resources :reviews

  # post '/login', to: 'sessions#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
