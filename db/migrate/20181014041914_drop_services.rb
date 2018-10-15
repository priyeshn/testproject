class DropServices < ActiveRecord::Migration[5.2]
  def change
    drop_table :task_services
  end
end
