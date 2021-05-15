class UsersController < ApplicationController
    def create

      @email_found = User.find_by(email: params[:email])
      @username_found = User.find_by(username: params[:username])    

      if @email_found != nil
        respond_to do |format|
          format.json { render json: { error: 'email already registered' }, status: :conflict }
        end
  
        return
      end

      if @username_found != nil
          respond_to do |format|
            format.json { render json: { error: 'username already registered' }, status: :conflict }
          end
    
          return
      end

      @new_user = User.new(
          username: params[:username],
          email: params[:email], 
          password: params[:password],
      )   

      if !@new_user.save
        respond_to do |format|
          format.json { render json: { error: 'missing fields' }, status: :unprocessable_entity }
        end
      end
      
      respond_to do |format|
        format.json { render json: { id: @new_user[:id] } }
      end
    end
end
