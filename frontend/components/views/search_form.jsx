import React  from 'react'
import TaskCategories from './task_categories';

export default class search extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getTaskCategories();
  }
  render() {

    console.log("this.props" + JSON.stringify(this.props.categories))
    const categories = this.props.categories.map(category => {
        return (
          <TaskCategories
            key={category.id}
            category={category}
          />
        );
      });
    
    console.log("inital"  +JSON.stringify(this.props.categories))
    return (
      <div>
        <h1> in Search container </h1>
        {categories}
      </div>
    )
  }
}
