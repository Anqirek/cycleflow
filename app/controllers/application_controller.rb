class ApplicationController < ActionController::API
 include ActionController::Cookies
 rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
 before_action :authorize

#  def hello_world
#     session[:count] = (session[:count] || 0) + 1
#     render json: {count: session[:count]}
#  end
private

  def authorize
    @current_courier = Courier.find_by(id: session[:courier_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_courier
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
