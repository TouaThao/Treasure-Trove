import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Button/Logout'


import '../../styles/main.css'

class NavLogin extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    let linkb = null;
    if (this.props.userType === 'owner') {
      linkb =
      <ul>
      <li id="LoginNavLocation">
              <Link to="/registerlocation">
              Location
        </Link>
        </li>
        </ul>
        ;
    } else {
      linkb = ''
    }
    if (this.props.loginStatus === 'true') {
      return (
        <div className='navbar'>
         <h1 id="treasure" >Treasure Trove</h1>
          <ul>
            <li id="LoginNavHome">
              <Link   to="/home">
                Home Page
        </Link>
            </li>
            <li id="LoginNavProfile" >
              <Link to="/user">
                Profile
        </Link>
            </li>
            <li>
            {linkb}
            </li>
            <li  id="LoginNavLogout">
              <Logout></Logout>
            </li>
          </ul>
        </div>
      )
    } else {
      return (
        <div className='navbar'>
          <ul>
            <li >
              <Link to="/home">
                Home Page
        </Link>
            </li>
            <li>
              <Link to="/user">
                Profile
        </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
            </li>
          </ul>
        </div>
      )
    }
  }
}

export default NavLogin