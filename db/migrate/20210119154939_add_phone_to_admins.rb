class AddPhoneToAdmins < ActiveRecord::Migration[6.0]
  def change
    add_column :admins, :phone, :string
  end
end
