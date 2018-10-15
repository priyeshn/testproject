class CreateTaskMainCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :task_main_categories do |t|
      t.string :name, null: false
      t.string :description ,null: false
    end
    add_index :task_main_categories, :name, unique: true
  end
end

 
