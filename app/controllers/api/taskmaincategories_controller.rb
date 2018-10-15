class Api::TaskmaincategoriesController < ApplicationController

    def index
        puts "Inside TaskmaincategoriesController"
        @catagories = TaskMainCategory.all
        render "api/taskmaincatagories/index"
        # render "api/users/show"
    end
end
