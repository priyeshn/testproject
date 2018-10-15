Rails.application.routes.draw do
 
  # post 'task/login', :to => 'sessions#login'

  namespace :api, defaults: {format: :json} do
     
    resource :session, only: [:create, :destroy, :show]
    resources :taskmaincategories, only: [:index]
    
  end

  root to: "root#root"
  # get 'task/all', :to => 'task#all'
  # post 'task/create', :to => 'task#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
