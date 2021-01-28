class CreateLevels < ActiveRecord::Migration[6.0]
  def change
    create_table :levels do |t|
      t.string :name
      t.string :measurement
      t.integer :reps
      t.string :timeframe
      t.integer :sets
      t.belongs_to :exercise, null: false, foreign_key: true

      t.timestamps
    end
  end
end
