import React from 'react';


const TaskCategories = ({ category }) => {
    return (
        <li>    
            {category.name }
        </li>
    );
};

export default TaskCategories;