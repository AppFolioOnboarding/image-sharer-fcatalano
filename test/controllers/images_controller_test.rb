require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @validImage= images(:valid)
    @invalidImage= images(:invalid)
  end

  test "should get index" do
    get images_url
    assert_response :success
  end

  test "should get new" do
    get new_image_url
    assert_response :success
  end

  test "should create image" do
    assert_difference('Image.count') do
      post images_url, params: { image: { url: @validImage.url } }
    end

    assert_redirected_to image_url(Image.last)
  end

  test "should not create image" do
    assert_no_difference('Image.count') do
      post images_url, params: { image: { url: @invalidImage.url } }
    end

    assert_select "span", "is invalid"
  end

  test "should show image" do
    get image_url(@validImage)
    assert_response :success
  end

  test "should get edit" do
    get edit_image_url(@validImage)
    assert_response :success
  end

  test "should update image" do
    patch image_url(@validImage), params: { image: { url: @validImage.url } }
    assert_redirected_to image_url(@validImage)
  end

  test "should destroy image" do
    assert_difference('Image.count', -1) do
      delete image_url(@validImage)
    end

    assert_redirected_to images_url
  end
end
