Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root to: 'games#index'
  devise_for :users

  resources :games, only: [:create, :show, :index]
end
