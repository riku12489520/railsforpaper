class CreateStages < ActiveRecord::Migration[7.0]
  def change
    create_table :stages do |t|
      t.string :toptemp
      t.string :downtemp
      t.string :paper_id

      t.timestamps
    end
  end
end
