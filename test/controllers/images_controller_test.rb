require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @valid_image = images(:valid)
    @invalid_image = images(:invalid)
  end

  test 'should get new' do
    get new_image_url
    assert_response :success
  end

  test 'should create image' do
    assert_difference('Image.count') do
      post images_url, params: { image: { url: @valid_image.url } }
    end

    assert_redirected_to image_url(Image.last)
  end

  test 'should not create image' do
    assert_no_difference('Image.count') do
      post images_url, params: { image: { url: @invalid_image.url } }
    end

    assert_select 'span', 'is invalid'
  end

  test 'should show image' do
    get image_url(@valid_image)
    assert_response :success
  end
end