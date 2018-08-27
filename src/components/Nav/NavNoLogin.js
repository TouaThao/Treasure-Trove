import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

//css
import '../../styles/main.css'

import bowl from '../BackGround/1.jpg'


class NavNoLogin extends Component {
    render() {
        return (
          
            <div className='navbar'>
             <h1 id="treasure" >Treasure Trove</h1>
            
               <ul id="otherlink" >  
            <li>
            <Button>
              <Link to="/home">
                Home Page
        </Link>
        </Button>
            </li>
            <li>
            <Button><Link to="/login">Login</Link></Button>
            </li>
          </ul>
          </div>
        
        )
    }
}

export default NavNoLogin