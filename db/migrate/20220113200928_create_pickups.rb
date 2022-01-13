class CreatePickups < ActiveRecord::Migration[7.0]
  def change
    create_table :pickups do |t|
      t.belongs_to :item, null: false, foreign_key: true
      t.belongs_to :courier, null: false, foreign_key: true

      t.timestamps
    end
  end
end
