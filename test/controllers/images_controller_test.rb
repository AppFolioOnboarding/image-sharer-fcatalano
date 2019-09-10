require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  test 'should get new' do
    get new_image_url

    assert_response :ok
  end

  test 'should create image' do
    @valid_image = images(:valid)

    assert_difference('Image.count') do
      post images_url, params: { image: { url: @valid_image.url } }
    end

    assert_redirected_to image_url(Image.last)
  end

  test 'should not create image with invalid url' do
    @invalid_image = images(:invalid)

    assert_no_difference('Image.count') do
      post images_url, params: { image: { url: @invalid_image.url } }
    end

    assert_select 'span', 'is invalid'
  end

  test 'should show image' do
    @valid_image = images(:valid)

    get image_url(@valid_image)

    assert_response :ok
  end
end
