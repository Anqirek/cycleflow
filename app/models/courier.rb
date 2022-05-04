class Courier < ApplicationRecord
 has_many :items, dependent: :destroy
 has_many :pickups
 has_many :customers, through: :items

 has_secure_password

 validates :name, presence: true, uniqueness: true 
end
