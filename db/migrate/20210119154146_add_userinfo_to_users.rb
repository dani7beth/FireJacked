class AddUserinfoToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :weight, :float
    add_column :users, :height, :float
    add_column :users, :gender, :string
    add_column :users, :about, :text
    add_column :users, :age, :integer
  end
end
