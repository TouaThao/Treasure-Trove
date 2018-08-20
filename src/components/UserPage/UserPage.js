import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';


///material ui
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';


const mapStateToProps = state => ({
  user: state.user,
  // userinfo: state.userinfo
});


class UserPage extends Component {
  componentDidMount() {
    // this.props.dispatch({ type: USER_INFO.FETCH_USERINFO })
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }


  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }


  render() {
    let content = null;
    console.log('test', this.props.user)
    if (this.props.user.user_type === 'owner') {
      content = (
        <div>

          <h1>Welcome, {this.props.user.userName} to Treasure Trove </h1>
          <p>Your name is:{this.props.user.firstname} {this.props.user.lastname}</p>
          <p>Your from:{this.props.user.city}</p>
            <p>Your UserID is: {this.props.user.id}</p>
            <p> You're a: {this.props.user.user_type}</p>
        </div>
      )
    } else {
      return (
        content = (
          <div>
            <Nav />
            <h1
              id="welcome"
            >
              Welcome to Treasure Trove
                    </h1>
            <p>Your name is:{this.props.user.firstname} {this.props.user.lastname}</p>
            <p>Your from:{this.props.user.city}</p>
            <p>Your UserID is: {this.props.user.id}</p>
            <table>
              <thead>
                <tr>
                </tr>
              </thead>
              <tbody>
                {/* {personTable} */}
              </tbody>
            </table>
          </div>
        )
      )
    }
    return (
      <div>
        <Nav />
        {content}
      </div>
    );
  };
}


// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

