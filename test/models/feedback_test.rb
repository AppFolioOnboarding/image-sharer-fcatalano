require 'test_helper'

class FeedbackTest < ActiveSupport::TestCase
  test 'valid feedback' do
    feedback = Feedback.new(name: 'Name', comments: 'Comments')

    assert feedback.valid?
  end

  test 'invalid feedback without name' do
    feedback = Feedback.new(comments: 'Comments')

    refute feedback.valid?
    assert_not_nil feedback.errors[:name]
  end

  test 'invalid feedback without comments' do
    feedback = Feedback.new(name: 'Name')

    refute feedback.valid?
    assert_not_nil feedback.errors[:comments]
  end

  test 'invalid feedback without name or comments' do
    feedback = Feedback.new

    refute feedback.valid?
    assert_not_nil feedback.errors[:name]
    assert_not_nil feedback.errors[:comments]
  end
end
