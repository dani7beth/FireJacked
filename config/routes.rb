Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  mount_devise_token_auth_for 'Admin', at: 'api/admin_auth'

  namespace :api do
    put "update_submission/:submission_id/:user_id", to: "admins#update_submission"
    get "single_submission/:submission_id", to: "admins#single_submission"
    get "all_submissions", to: "admins#all_submissions"
    get "all_exercises", to: "exercises#all_exercises"
    resources :users
    resources :exercises do
      resources :levels do
        # resources :submissions do
        #   resources :comments
        # end
      end
      # post 'upload_image', to: 'exercises#basic_upload'
    end
    resources :levels do
      resources :submissions
    end
    resources :submissions do 
      resources :comments
    end
    # resources :comments
  end
end
