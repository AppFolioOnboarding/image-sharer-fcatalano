Rails.application.routes.draw do
  resources :images, only: %i[index show new create destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'images#index'

  resources :feedbacks, only: [:new]
end
