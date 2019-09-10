class Image < ApplicationRecord
  validates :url, format: { with: %r{https?:\/\/[\S]+\.[\S]+\.[\S]+\/([\S]{3,4})} }
  acts_as_taggable
end
