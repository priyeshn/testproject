import React from 'react';
import {NavLink,Link,withRouter} from 'react-router-dom';

const  Header=(routeInfo)=> {
    return(
    <div className="navBar">
        
               <div className="navContainer">
                    <NavLink replace={routeInfo.location.pathname === '\/'}  to={`/`}  className="logo">
                            <span className="logoPart1" >Task </span> <span className="logoPart2">  Rabbit </span>
                    </NavLink>
                    <div className="menuContainer">
                            <NavLink replace={routeInfo.location.pathname === '\/'} to={'/'}     className="menus">
                                    Become a Tasker
                            </NavLink>
                            <Link to={`/login`} className="menus">
                                    Login
                            </Link>
                            <NavLink replace={routeInfo.location.pathname === '\/'} to={'/'} className="menus">
                                    Services
                            </NavLink>
                    </div>
               </div>
    </div>
    );
};

export default withRouter(Header)