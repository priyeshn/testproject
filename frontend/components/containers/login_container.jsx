
import { connect } from 'react-redux';
import {login} from '../actions/session_actions'
import LoginForm from '../views/login_form'
import {withRouter} from 'react-router-dom';
 
 
const mapStateToProps=(user,errors)=>{
    return {
        user
    };
};

const mapDispatchtoProps= dispatch =>{
    console.log("in  login mapDispatchtoProps")
    return {
        login:(user)=>dispatch(login(user))
    }
};


export default withRouter (connect(
    mapStateToProps,
    mapDispatchtoProps
)(LoginForm) );