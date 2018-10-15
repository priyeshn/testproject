import { connect } from 'react-redux';
import {getTaskCategories} from '../actions/task_category_actions'
import SearchForm from '../views/search_form'

 
 
const mapStateToProps=({categories,login})=>{
    console.log("in  Search mapStateToProps"  +JSON.stringify(categories))
    return {
        categories:Object.keys(categories).map(id => categories[id]),
        login
    };
};

const mapDispatchtoProps= dispatch =>{
    console.log("in  Search mapDispatchtoProps")
    return {
        getTaskCategories:()=>dispatch(getTaskCategories())
    }
};


export default connect(mapStateToProps,mapDispatchtoProps)(SearchForm) ;