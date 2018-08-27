import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { GET_LOCATION_ACTION } from '../../redux/actions/LocationAction'



///material ui
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//css
import '../../styles/main.css'

//picture
import Stock from '../BackGround/stock.jpg'


const mapStateToProps = state => ({
  user: state.user,
  reduxState: state,
});
const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


class UserPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      edit: true,
      save: true,
      cancel: true,
      firstname: '',
      lastname: '',
      city: '',
      store: ''
    }
  }

  componentDidMount() {
    // this.props.dispatch({ type: USER_INFO.FETCH_USERINFO })
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type: GET_LOCATION_ACTION.GET_STORE })
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
    
    this.props.dispatch({ type: USER_ACTIONS.ADD_EDIT, payload: [this.props.user.id, data] })
    this.setState({
      edit: !this.state.edit
    })
  }

  handleUpdate = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  handleSendToFeedBackPage = (event) => {
    event.preventDefault();
    this.props.history.push('/location/' + event.target.value)
  }

  render() {

    let storeData = this.props.reduxState.map.store.map(((store, i) => {
      return (
        <div key={i}>
          Business Name:  {store.name}
          <br></br>
          Address:  {store.address}
          <br></br>
          <br></br>
          <button value={store.id} onClick={this.handleSendToFeedBackPage}> FeedBack</button>
        </div>
      )
    }))
    let content = null;
    if (this.props.user.user_type === 'owner') {
      content = (
        <div id="userpage">
        <Card width="100" >
              <CardContent  >
                <Typography color="textSecondary">

                  <img src={Stock} width="100" float="left" />
                  <br>
                  </br>
                  <div hidden={(!this.state.edit)}>
                  FirstName:{this.props.user.firstname}
                  </div>
          <TextField
            hidden={(this.state.edit)}
            value={this.state.firstname}
            onChange={this.handleUpdate('firstname')}
          />
          <br>
          </br>
          <div hidden={(!this.state.edit)}>
          lastName:{this.props.user.lastname}
          </div>
          <TextField
            hidden={(this.state.edit)}
            value={this.state.lastname}
            onChange={this.handleUpdate('lastname')}
          />
          <br>
          </br>
          <div hidden={(!this.state.edit)}>
          City:{this.props.user.city}
          </div>
          <TextField
            hidden={(this.state.edit)}
            value={this.state.city}
            onChange={this.handleUpdate('city')}
          />
          <br>
          </br>
          <button
            hidden={(!this.state.edit)}
            onClick={this.handleToggleEdit}>Edit Your Profile</button>
          <button
            onClick={this.handleDispatch}
            hidden={(this.state.edit)}
          >Save</button>
          <button
            onClick={this.handleToggleEdit}
            hidden={(this.state.edit)}
          >Cancel</button>
          <h3>Your Business</h3>
          <div>{storeData}</div>


            
                </Typography>
              </CardContent>
            </Card>


       
        </div>
      )
    } else {
      return (
        content = (
          <div>
            <Nav />
            <h1
            align="center"
              id="welcome"
            >
              Welcome to Treasure Trove
                    </h1>
            <div>
            </div>
            <div id="userpage">
            <Card width="100" >
              <CardContent  >
                <Typography color="textSecondary">

                  <img src={Stock} width="100" float="left" />
                  <br>
                  </br>
                  <div hidden={(!this.state.edit)}>
                  FirstName:{this.props.user.firstname}
                  </div>
                  <TextField
                    hidden={(this.state.edit)}
                    value={this.state.firstname}
                    onChange={this.handleUpdate('firstname')}
                  />
                  <br>
                  </br>
                  <div hidden={(!this.state.edit)}>
                  lastName:{this.props.user.lastname}
                  </div>
                  <TextField
                    hidden={(this.state.edit)}
                    value={this.state.lastname}
                    onChange={this.handleUpdate('lastname')}
                  />
                  <br>
                  </br>
                  <div hidden={(!this.state.edit)}>
                  City:{this.props.user.city}
                  </div>
                  <TextField
                    hidden={(this.state.edit)}
                    value={this.state.city}
                    onChange={this.handleUpdate('city')}
                  />
                  <br>
                  </br>
                  <button
                    hidden={(!this.state.edit)}
                    onClick={this.handleToggleEdit}>Edit Your Profile
                    </button>
                  <button
                    onClick={this.handleDispatch}
                    hidden={(this.state.edit)}
                  >Save
                  </button>
                  <button
                    onClick={this.handleToggleEdit}
                    hidden={(this.state.edit)}
                  >Cancel</button>
                  <br />
                </Typography>
              </CardContent>
            </Card>
            </div>
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

