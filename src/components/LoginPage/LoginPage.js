import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import Nav from '../../components/Nav/Nav';
import Truck from '../BackGround/black-and-white-bus-buying-1264937.jpg'

////material ui
// import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

//CSS
import '../../styles/LoginPage.css'


const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch(clearError());
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName !== null) {
      this.props.history.push('user');
    }
  }

  login = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(triggerLogin(this.state.username, this.state.password));
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.props.login.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.props.login.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div>
        <Nav/>
        {this.renderAlert()}
        < img id="loginpicture" src={Truck}   width="100%" height="100%"/>
        <form id="form" onSubmit={this.login}>
          <h1 class="animated lightSpeedIn delay-2s ">Login</h1>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <Button id="loginButtonRight" variant="contained" color="primary" onClick={this.login}>Login</Button>
    
            <Button id="loginButtonLeft" variant="contained" color="primary"><Link to="/register" >Register</Link></Button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginPage);
