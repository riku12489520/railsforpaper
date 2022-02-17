class CreatePapers < ActiveRecord::Migration[7.0]
  def change
    create_table :papers do |t|
      t.string :item
      t.integer :num
      t.boolean :score
      t.text :process

      t.timestamps
    end
  end
end
