import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import Map from '../Map/Map'
import { USER_ACTIONS } from '../../redux/actions/userActions';


//material
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


///picture
import Truck from '../BackGround/black-and-white-bus-buying-1264937.jpg'

//logo
import FB from '../BackGround/if_social__media__social_media__facebook__3350437.png'
import SK from '../BackGround/if_social__media__social_media__skype__3350457.png'
import TB from '../BackGround/if_social__media__social_media__tumblr__3350465 (1).png'

//css 
import '../../styles/main.css'



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
          <br></br>
          <h3 id="welcomeTwo" align="center">Welcome To Treasure Trove</h3>
          {content}
        </div>
        <div>
          <Map/>
          <div class="hero-image">

           </div>
        </div>
        
      
        <footer id="footer">
          <img height="50" width="50"  src = {FB}></img>
          <img height="50" width="50"  src = {SK}></img>
          <img height="50" width="50"   src = {TB}></img>
          <p id="copy">© 2018 Copyright Treasure Trove</p>
          <br></br>
        </footer>   
        </div>
            
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  reduxState: state
});

export default connect(mapStateToProps)(homepage);
