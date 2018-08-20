import React, { Component } from 'react';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user,
    // userinfo: state.userinfo
  });

  

class LogingButton extends Component{
    login = (event) => {
        event.preventDefault();
    
        if (this.state.username === '' || this.state.password === '') {
          this.props.dispatch(formError());
        } else {
          this.props.dispatch(triggerLogin(this.state.username, this.state.password));
        }
      }
    
render(){
    return(
        <div>
        <Button onClick={this.logout} >
        Login
        </Button>
        </div>
    )
}
}

export default connect (mapStateToProps)(LogingButton)