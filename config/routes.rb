Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  mount_devise_token_auth_for 'Admin', at: 'api/admin_auth'

  namespace :api do
    resources :exercises do
      resources :levels
    end
    resources :levels do
      resources :submissions
    end
    resources :submissions do 
      resources :comments
    end
    resources :comments
  end
end
