Rails.application.routes.draw do
  resources :images, only:%i[show new create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'images#new'
end
