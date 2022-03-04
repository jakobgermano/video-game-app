Rails.application.routes.draw do

  resources :vehicles
  resources :drivers
  resources :reviews 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
