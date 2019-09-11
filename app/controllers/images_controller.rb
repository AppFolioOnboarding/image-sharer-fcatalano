class ImagesController < ApplicationController
  before_action :find_image, only: %i[show edit update destroy]

  def index
    @title = 'Images'
    @images = Image.filter(params[:tag])
  end

  def show
    @title = 'Show Image'
  end

  def new
    @title = 'New Image'
    @image = Image.new
  end

  def create
    @image = Image.new(image_params)

    if @image.save
      redirect_to @image, notice: 'Image was successfully created.'
    else
      render :new
    end
  end

  def destroy
    @image.destroy
    redirect_to images_url
  end

  private

  def find_image
    @image = Image.find(params[:id])
  end

  def image_params
    params.require(:image).permit(:url, :tag_list, :tag)
  end
end
