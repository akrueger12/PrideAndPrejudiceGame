class User < ApplicationRecord
    validates :username, :email, :password, presence: true

    before_save :default_values

    private

    def default_values
        self.levelsPassed = 0 if self.levelsPassed.nil?
    end
end
