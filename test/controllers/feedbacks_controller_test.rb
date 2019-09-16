require 'test_helper'

class FeedbacksControllerTest < ActionDispatch::IntegrationTest
  test 'should create feedback' do
    assert_difference('Feedback.count') do
      post api_feedbacks_path, params: { feedback: { name: 'Name', comments: 'Comments' } }
    end

    assert_response :created
  end

  test 'should not create feedback with missing name' do
    assert_no_difference('Feedback.count') do
      post api_feedbacks_path, params: { feedback: { comments: 'Comments' } }
    end

    assert_response :unprocessable_entity
  end

  test 'should not create feedback with missing comments' do
    assert_no_difference('Feedback.count') do
      post api_feedbacks_path, params: { feedback: { name: 'Name' } }
    end

    assert_response :unprocessable_entity
  end
end
