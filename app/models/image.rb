class Image < ApplicationRecord
  validates :url, format: { with: /https?:\/\/[\S]+\.[\S]+\.[\S]+\/([\S]{3,4})/ }
end
