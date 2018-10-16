import React from 'react';


const TaskCategories = ({ category,className }) => {
    return (
            
                 <button  className={className} >
                     {category.name }
                 </button>
                  
           
    );
};

export default TaskCategories;