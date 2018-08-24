import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import {GET_LOCATION_ACTION} from '../../redux/actions/LocationAction'


///material ui
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';


const mapStateToProps = state => ({
  user: state.user,
  reduxState: state,
});


class UserPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: true,
      save: true,
      cancel: true,
      firstname: '',
      lastname: '',
      city:'',
      store:''
    }
  }

  componentDidMount() {
    // this.props.dispatch({ type: USER_INFO.FETCH_USERINFO })
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({type: GET_LOCATION_ACTION.GET_STORE})
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  handleToggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  }

  handleDispatch = () => {
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      city: this.state.city,
    }
    this.props.dispatch({ type: USER_ACTIONS.ADD_EDIT, payload: [this.props.user.id,data]})
  }

  handleUpdate = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  handleSendToFeedBackPage = (event)=>{
    event.preventDefault();
    this.props.history.push('/location/' + event.target.value)
  }

  render() {
    console.log('asdasds',this.props.reduxState)
    let storeData= this.props.reduxState.map.store.map(((store,i)=>{
      return(
       <div key={i}>
      name = {store.name}
      <br></br>
      address= {store.address}
      <br></br>
      <button value={store.id} onClick={this.handleSendToFeedBackPage}>FeedBack</button>
       </div>
      )
    }))
    let content = null;
    if (this.props.user.user_type === 'owner') {
      content = (
        <div>
          <div>{storeData}</div>
          FirstName:{this.props.user.firstname}
          <TextField
          hidden={(this.state.edit)}
              value={this.state.firstname}
              onChange={this.handleUpdate('firstname')}
            />
          <br>
          </br>
          lastName:{this.props.user.lastname}
          <TextField
          hidden={(this.state.edit)}
              value={this.state.lastname}
              onChange={this.handleUpdate('lastname')}
            />
          <br>
          </br>
          City:{this.props.user.city}
          <TextField
          hidden={(this.state.edit)}
              value={this.state.city}
              onChange={this.handleUpdate('city')}
            />
          <br>
          </br>
          <button
          hidden={(!this.state.edit)}
           onClick={this.handleToggleEdit}>Edit</button>
          <button
            onClick={this.handleDispatch}
            hidden={(this.state.edit)}
          >Save</button>
          <button
            onClick={this.handleToggleEdit}
            hidden={(this.state.edit)}
          >Cancel</button>

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

