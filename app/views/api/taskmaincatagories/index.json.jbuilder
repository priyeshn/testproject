@catagories.each do |task_category|
    json.set! task_category.id do
    json.extract! task_category, :id, :name , :description

    if task_category.photo.attached?
      json.photoUrl url_for(task_category.photo)
    end
    end
end


 