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
    const categoriesSet1 = this.props.categories.map(category => {
      
          if ((category.name.startsWith('Mounting')) ||
              (category.name.startsWith('Moving'))  ||
              (category.name.startsWith('Furniture')) )
            {
            return   (
              <TaskCategories
                key={category.id}
                category={category}
                className="categoryBtn1"

              />
              );
          }
         
      });

      const categoriesSet2 = this.props.categories.map(category => {
      
        if ((category.name.startsWith('Home')) ||
            (category.name.startsWith('General'))  ||
            (category.name.startsWith('Heavy')) )
          {
            return   (
              <TaskCategories
                key={category.id}
                category={category}
                className="categoryBtn2"

              />
              );
          }
         
      });
    
    return (
       <div>
          <div className="mainTitle">
               The convenient & affordable way
               <br/>
                to get things done around the home
                <div className="subTitle">
                 Choose from over 140,000 vetted Taskers for help without breaking the bank.
                </div>
          </div>
          <div className="taskCategoryContainer"  >
                
                   {categoriesSet1}
                   <br/>
                   {categoriesSet2}
                 
          </div>
          <div className="searchContainer"  >
          < input type="search" className="search" placeholder="Need Somthing different?" />
          </div>
        </div>
     
    )
  }
}
