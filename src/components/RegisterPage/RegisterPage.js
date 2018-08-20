import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './RegisterPage.css';



class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      city: '',
      user_type: '',
      message: '',
    };
  }

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      const body = {
        username: this.state.username,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        city: this.state.city,
        user_type: this.state.user_type
      };
      console.log(body)
      // making the request to the server to post the new user's registration
      axios.post('/api/user/register/', body)
        .then((response) => {
          if (response.status === 201) {
            this.props.history.push('/login');
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Is the server running?',
          });
        });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (

      <div>

        {this.renderAlert()}
        <form onSubmit={this.registerUser}>
          <h2>Register User</h2>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
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
            <div>
              <label htmlFor="firstname">
                firstname:
              <input
                  type="text"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.handleInputChangeFor('firstname')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="lastname">
                lastname:
              <input
                  type="text"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleInputChangeFor('lastname')}
                />
              </label>
            </div>
            <div>
              <label htmlFor="city">
                city:
              <input
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleInputChangeFor('city')}
                />
              </label>
              <div>
              </div>
            </div>
            <br></br>
            <p>Are you a business owner? if yes click Yes</p>
           <label><input value='owner'  onChange={this.handleInputChangeFor('user_type')} type="radio" name="optradio" ></input>Yes</label> 
           <label><input value='viewer' onChange={this.handleInputChangeFor('user_type')} type="radio" name="optradio" ></input>NO</label> 
           <br/>
            <Button
              color="primary"
              type="submit"
              name="submit"
              value="Register"
            >Register
            </Button>
            <Button color="primary">
              <Link to="/login">Cancel</Link>
            </Button>
          </div>
        </form>
      </div>

    );
  }
}

export default RegisterPage;

