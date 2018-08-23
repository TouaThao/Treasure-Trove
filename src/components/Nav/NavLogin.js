import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Button/Logout'


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
      <li>
              <Link to="/registerlocation">
              Location
        </Link>
        </li>
        <li>
              <Link to="/FeedBack">
              FeedBack
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
          <ul>
            <li>
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
              <Link to="/edit">
                Edit Profile
        </Link>
            </li>
            <li>
            {linkb}
            </li>
            <li>
              <Logout></Logout>
            </li>
          </ul>
        </div>
      )
    } else {
      return (
        <div className='navbar'>
          <ul>
            <li>
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
              <Link to="/edit">
                Edit Profile
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