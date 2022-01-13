class Pickup < ApplicationRecord
 belongs_to :item
 belongs_to :courier
end
