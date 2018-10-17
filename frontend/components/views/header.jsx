import React from 'react';
import {NavLink,Link,withRouter} from 'react-router-dom';


class Header extends React.Component {
         
        constructor(props){
                super(props)
        }

        componentDidMount(){
                console.log("in header" +JSON.stringify(this.props))
              
        }
  render() {
        let header="";
        if (this.props.location.hasOwnProperty("currentUser")){
                      
                 header = <div className="menuContainer">
                                <NavLink replace={this.props.location.pathname === '\/'} to={'/'}     className="menus">
                                        Account
                                </NavLink>
                                <Link to={`/login`} className="menus">
                                        MyTasks
                                </Link>
                                <NavLink replace={this.props.location.pathname === '\/'} to={'/'} className="menus">
                                        Book a Task
                               </NavLink>
                               <NavLink replace={this.props.location.pathname === '\/'} to={'/'} className="menus">
                                        Get $10
                               </NavLink>
                         </div>

        }else{
                 header=  <div className="menuContainer">
                                <NavLink replace={this.props.location.pathname === '\/'} to={'/'}     className="menus">
                                        Become a Tasker
                                </NavLink>
                                <Link to={`/login`} className="menus">
                                        Login
                                </Link>
                                <NavLink replace={this.props.location.pathname === '\/'} to={'/'} className="menus">
                                        Services
                               </NavLink>
                         </div>
                        
                
        }
        console.log("print header" +header);
    return (
        
        
         <div className="navBar">
        
               <div className="navContainer">
                     <div className="icon">
                     </div>
                    <NavLink replace={this.props.location.pathname === '\/'}  to={`/`}  className="logo">
                            <p className="logoPart1" >Task<span className="logoPart2">Rabbit</span></p> 
                          
                     </NavLink>
                    {header}
               </div>
          </div>
    )
  }
}



export default withRouter(Header)