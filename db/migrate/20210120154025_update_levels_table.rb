class UpdateLevelsTable < ActiveRecord::Migration[6.0]
  def change
    add_column :exercises, :description, :string
    add_column :levels, :multiplier, :float
    add_column :levels, :metric, :string
    remove_column :levels, :timeframe, :string
    add_column :levels, :timeframe, :integer
  end
end
