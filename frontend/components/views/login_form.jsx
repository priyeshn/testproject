import React from 'react'
 

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    console.log("props" )
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){
    console.log("props");
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("inside handle submit");
    const user = Object.assign({}, this.state);
    this.props.login(user).then(()=>{
      this.props.history.push('/');
      // console.log("logged in " +JSON.stringify(this.props));
    });
  }
  update(field) {
    
    return e =>{ 
        
          this.setState({
     
            [field]: e.currentTarget.value
          });
      }
  }

  render() {
    return (
      <div className="loginFormContainer" >
              <form className="loginForm" onSubmit={this.handleSubmit} >
                  <div className="loginContainer" >
                              <div className="title" >
                               <span className="logoPart1" >Task </span> <span className="logoPart2">  Rabbit </span>
                              </div>
                             <div className="email">
                                  <label  >Email Address</label><br/>
                                  <input   type="text"      
                                          value={this.state.email}
                                           onChange={this.update('email')} />
                             </div>
                          
                              <div className="password" >
                                  <label >Password</label><br/>
                                  <input  type="password"    
                                          value={this.state.password}
                                  onChange={this.update('password')}
                                  
                                  />
                             </div>
                             
                             <div className="submitBtn" >
                                 <button type="submit" value="Submit">Log In</button>
                             </div>
                      
                   </div>
             </form>
      </div>
    )
  }
}

export default LoginForm;