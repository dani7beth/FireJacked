class CreateExercises < ActiveRecord::Migration[6.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :image
      t.string :how_to_video
      t.string :category
      t.string :activity
      t.belongs_to :admin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
