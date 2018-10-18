import React  ,{Fragment} from 'react'
import TaskCategories from './task_categories';
import TaskImages from './task_images'

export default class search extends React.Component {
  
  constructor(props) {
    super(props);

    this.onChange=this.onChange.bind(this);
    this.onKeyDown=this.onKeyDown.bind(this);
    this.onClick=this.onClick.bind(this);
    this.closeAutoComplete=this.closeAutoComplete.bind(this);
    this.state = {
      filteredCategories:[],
      inData:"",
      showAutoComplete:false,
      selected:0
    }
  }

  componentDidMount(){
    this.props.getTaskCategories();
    
    document.addEventListener('click', this.handleOutsideClick, false);
  }

   

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    debugger;
    if (this.node &&  this.node.contains(e.target)) {
      return;
    }
    console.log("calling on click")
    this.closeAutoComplete;
   
  }

  closeAutoComplete(){
    alert("called")
  }
  onClick(){
    
    return e=>{
      this.setState({
        selected: 0,
        filteredCategories: [],
        showAutoComplete: false,
        inData: e.currentTarget.innerText
      });
    }
  }
  onKeyDown(){
    return e =>{ 
      const {selected,filteredCategories } = this.state;

      if (e.keyCode === 13) {
        this.setState({
          selected: 0,
          showAutoComplete: false,
          inData: filteredCategories[selected].name
        });
      }
    }
  }
  onChange () {
    return e =>{ 
          const { categories } = this.props;
          const userInput = e.currentTarget.value;
         
          const filteredCategories = categories.filter(
            category =>
            category.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
          );

          this.setState({
            filteredCategories:filteredCategories,
            showAutoComplete:true,
            inData:filteredCategories.name,
            selected:0
          });
          console.log("autoFills" +JSON.stringify(filteredCategories));
    }
     
  };
  render() {
   
 
    const imagesBtns = this.props.categories.map(category=>{

      if (category.hasOwnProperty("photoUrl")){
      
          return category.photoUrl
      }

    });

    let categorySuggested="";
 
    console.log("re-render before" +JSON.stringify(this.state.filteredCategories) );
    if (  this.state.showAutoComplete && this.state.filteredCategories.length){
       console.log("re-render")
       categorySuggested = (
            <ul class="autoFills">
                {
                 
                  this.state.filteredCategories.map( (category,index)=>{
                    let className;
                    if (index === this.state.selected) {
                         className = "autoFill-active";
                    }
                    return (
                      <li className={className} onClick={this.onClick()}>
                        <img src={category.photoUrl}  className="autoFill-image"/>
                        {category.name}
                      </li>
                    );
                  })
                }
            </ul>
        )
    }
  

 
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
       <div className="searchMain"  ref={node => this.node = node} >
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

          <div class="autoComplete">
              <div className="searchContainer"  >
                  < input type="search" className="search" placeholder="Need Somthing different?"
                   onChange={this.onChange()} 
                   onKeyDown={this.onKeyDown()} 
                   value={this.state.inData} />
              </div>
              {categorySuggested}
          </div>
          <TaskImages />
        </div>
     
    )
  }
}
