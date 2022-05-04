class Customer < ApplicationRecord
 has_many :items, dependent: :destroy
 has_many :couriers, through: :items

 validates :username, :email, presence: true, uniqueness: true
end
