class AddStageIdToPaper < ActiveRecord::Migration[7.0]
  def change
    add_column :papers, :stage_id, :id
  end
end
