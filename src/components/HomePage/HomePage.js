import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import Map from '../Map/Map'
import { USER_ACTIONS } from '../../redux/actions/userActions';

///





export class homepage extends Component {

  componentDidMount() {
    // this.props.dispatch({ type: USER_INFO.FETCH_USERINFO })
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  handle = (event) =>{
    console.log('did we get this?')
  }

  render() {
    let content = null;
    return (
      <div>
        <div>
          <Nav />
          {content}
        </div>
        <h1>Welcome to Treasure Trove</h1>
        <div>
          <Map/>
        </div>
        </div>
            
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  reduxState: state
});

export default connect(mapStateToProps)(homepage);
