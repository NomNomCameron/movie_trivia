Rails.application.routes.draw do
  root to: 'games#index'
  devise_for :users

  resources :games, only: [:create, :show, :index]
end
