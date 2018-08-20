import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavNoLogin extends Component{
    render() {
        return(
            <div className='navbar'>
            
              <Link to="/login">Login</Link>
            
            </div>
        )
    }
}

export default NavNoLogin