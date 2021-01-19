Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  mount_devise_token_auth_for 'Admin', at: 'api/admin_auth'

  namespace :api do
    get "all_exercises", to: "exercises#all_exercises"
    resources :exercises do
      resources :levels
      post 'upload_image', to: 'exercises#basic_upload'
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
