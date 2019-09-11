class Image < ApplicationRecord
  validates :url, format: { with: %r{https?:\/\/[\S]+\.[\S]+\.[\S]+\/([\S]{3,4})} }
  acts_as_taggable

  def self.filter(tag)
    if tag&.present?
      Image.tagged_with(tag)
    else
      Image.all
    end
  end
end
