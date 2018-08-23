import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { GET_LOCATION_ACTION } from '../../redux/actions/LocationAction'
// import NavLogin from '../Nav/NavLogin'
import Nav from '../Nav/Nav'

//css 
import '../../styles/RegisterLocation.css'


//material ui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const mapStateToProps = (state) => ({
  user: state.user,
}
);

class RegisterLocation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      vendor: '',
      user_id: '',
    };
  }

  componentDidMount() {
    // this.props.dispatch({ type: USER_INFO.FETCH_USERINFO })
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }


  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }


  handleGetInfoExceptGeoCode = () => {
    const data = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      vendor: this.state.vendor,
      user_id: this.props.user.id
    }
    console.log('did we get the right data?', data)
    this.props.dispatch({ type: GET_LOCATION_ACTION.ADD, payload: data })
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <form id="post" onSubmit={this.handleGetInfoExceptGeoCode}>
          <h2>Register Your Business</h2>
          <div>
            <TextField
              id="Business Name"
              label="Business Name"
              margin="normal"
              value={this.state.name}
              onChange={this.handleInputChangeFor('name')}
            />
          </div>
          <div>
            <TextField
              id="Business Address"
              label="Business Address"
              margin="normal"
              value={this.state.address}
              onChange={this.handleInputChangeFor('address')}
            />
            {/* <label htmlFor="Address">
            Address:
              <input
              type="text"
              name="Address"
              value={this.state.address}
              onChange={this.handleInputChangeFor('address')}
            />
          </label> */}
          </div>
          <TextField
              id="City"
              label="City"
              margin="normal"
              value={this.state.city}
              onChange={this.handleInputChangeFor('city')}
            />
          <div>
            <p>Type of Business</p>
            <select onChange={this.handleInputChangeFor('vendor')} value={this.state.vendor}>
              <option value='' selected disabled  ></option>
              <option value='restaurants' >Restaurants</option>
              <option value='service' >Service</option>
              <option value='foodtruck' >FoodTruck</option>
            </select>
            <div>
              <br>
              </br>
            </div>
          </div>
          <Button
            variant="contained"
            type="submit"
            name="submit"
            value="Register"
          >Register
            </Button>
        </form>
      </div>
    )
  }
}





export default connect(mapStateToProps)(RegisterLocation)