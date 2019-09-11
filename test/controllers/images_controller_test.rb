require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    Image.create(url: 'https://via.placeholder.com/200.jpg', tag_list: ['placeholder'])
    Image.create(url: 'https://via.placeholder.com/100.jpg', tag_list: ['100'])
    get images_url

    assert_response :ok
    assert_select 'a', 'placeholder'
    assert_select 'a', '100'
  end

  test 'should get index filtered by tag' do
    Image.create(url: 'https://via.placeholder.com/200.jpg', tag_list: ['placeholder'])
    Image.create(url: 'https://via.placeholder.com/100.jpg', tag_list: ['100'])

    get images_url, params: { tag: 'placeholder' }

    assert_response :ok
    assert_select 'a', 'placeholder'
  end

  test 'should get new' do
    get new_image_url

    assert_response :ok
  end

  test 'should create image' do
    url = 'https://via.placeholder.com/200.jpg'

    assert_difference('Image.count') do
      post images_url, params: { image: { url: url } }
    end

    assert_redirected_to image_url(Image.last)
    assert_equal url, Image.last.url
  end

  test 'should not create image with invalid url' do
    url = 'invalid'
    assert_no_difference('Image.count') do
      post images_url, params: { image: { url: url } }
    end

    assert_select 'span', 'is invalid'
  end

  test 'should show image' do
    image = Image.create(url: 'https://via.placeholder.com/100.jpg', tag_list: ['placeholder'])
    get image_url(image.id)

    assert_response :ok
  end

  test 'should destroy image' do
    image = Image.create(url: 'https://via.placeholder.com/100.jpg', tag_list: ['placeholder'])
    assert_difference('Image.count', -1) do
      delete image_url(image)
    end

    assert_redirected_to images_url
  end
end
