class CreateCouriers < ActiveRecord::Migration[7.0]
  def change
    create_table :couriers do |t|
      t.string :name
      t.string :email
      t.string :address
      t.integer :rating

      t.timestamps
    end
  end
end
