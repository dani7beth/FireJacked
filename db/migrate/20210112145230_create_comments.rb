class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :body
      t.belongs_to :admin, null: false, foreign_key: true
      t.belongs_to :submission, null: false, foreign_key: true

      t.timestamps
    end
  end
end
