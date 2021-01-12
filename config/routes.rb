Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  mount_devise_token_auth_for 'Admin', at: 'api/admin_auth'
  as :admin do
    # Define routes for admin within this block.
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :exercises do
      resources :levels
    end
    resources :levels do
      resources :submissions
    end
    resources :users do
      resources :submissions
    end
    resources :admins do
      resources :comments
      resources :exercises
    end
  end
end
