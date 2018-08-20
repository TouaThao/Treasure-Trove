import React, { Component } from 'react';
import { connect } from 'react-redux';

//componet

import NavLogin from './NavLogin'
import NavNoLogin from './NavNoLogin'

const mapStateToProps = state => ({
  user: state.user,
});


class Nav extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: true,
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
    let content = null;
    if (this.props.user.id !== null) {
      return (
             content = (
          <div>
            <NavLogin loginStatus='true' userType={this.props.user.user_type}/>
          </div>
        )
      );
    } else if(this.props.user.id !== null) {
      return (
             content = (
          <div>
            <NavLogin loginStatus='false' userType={this.props.user.user_type}/>
          </div>
        )
      );
    } else {
      return(
        <NavNoLogin/>
      )
    }
  }
}

export default connect(mapStateToProps)(Nav);
