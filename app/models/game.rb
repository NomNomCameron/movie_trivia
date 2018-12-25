class Game < ApplicationRecord
  scope :active, -> { where(active: true) }
end
