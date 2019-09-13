module Api
  class FeedbacksController < ApplicationController
    def create
      @feedback = Feedback.new(feedback_params)

      if @feedback.save
        render json: { message: 'Success: Comments saved successfully!' }, status: :created
      else
        render json: { message: 'Error: name and comment are required!' }, status: :unprocessable_entity
      end
    end

    private

    def feedback_params
      params.require(:feedback).permit(:name, :comments)
    end
  end
end
