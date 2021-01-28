class AddSpecialityToAdmins < ActiveRecord::Migration[6.0]
  def change
    add_column :admins, :speciality, :string
  end
end
