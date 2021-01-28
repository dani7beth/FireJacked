Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  mount_devise_token_auth_for 'Admin', at: 'api/admin_auth'

  namespace :api do
    put "update_submission/:submission_id/:user_id", to: "admins#update_submission"
    get "single_submission/:submission_id", to: "admins#single_submission"
    get "all_submissions", to: "admins#all_submissions"
    get "all_exercises", to: "exercises#all_exercises"
    put "update_admin_image", to: "admins#update_admin_image"
    get "categories", to: "users#categories"
    get "user_stats", to: "users#user_submissions"
    get "users_submissions", to: "submissions#all_users_submissions"
    put 'update_user_image', to: "users#update_user_image"
    put "update_admin_image", to: "admins#update_admin_image"
    get "admin_index", to: "users#admin_index"
    get "exercise_subs", to: "submissions#exercise_subs"
    get "user_index", to: "admins#user_index"
    get "all_submissions/:user_id", to: "submissions#all_submissions_of_user"
    put "update_submission_status/:submission_id/:user_id", to: "submissions#update_status"
    resources :users
    resources :admins
    resources :exercises do
      resources :levels #do
        # resources :submissions do
        #   resources :comments
        # end
      # end
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
