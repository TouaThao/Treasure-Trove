import React, { Component } from 'react';
import { triggerLogout } from '../../redux/actions/loginActions';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

//css


const mapStateToProps = state => ({
    user: state.user,
    // userinfo: state.userinfo
  });


class LogoutButton extends Component{
    logout = () => {
        this.props.dispatch(triggerLogout());
        // this.props.history.push('/home');
      }
    
render(){

    return(
        <div>
        <Button className="Logoutbutton" onClick={this.logout} >
        logout
        </Button>
        </div>
    )
}
}

export default connect (mapStateToProps)(LogoutButton)