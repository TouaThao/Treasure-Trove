import React, { Component } from 'react';
import { connect } from 'react-redux';
import { redirect } from 'react-router-dom'
import Nav from '../../components/Nav/Nav';

//action
import { FEEDBACK_ACTION } from '../../redux/actions/FeedBackAction'

//material ui
import '../../styles/main.css'
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
    comment: state.comment,
    reduxState: state,

});



class LocationInfo extends Component {


    constructor(props) {
        super(props);
        this.state = {
            toggleButton: true,
            locationId: this.props.match.params.id,
        };
    }
    componentDidMount() {
        this.props.dispatch({ type: FEEDBACK_ACTION.FETCH_USER, payload: this.state.locationId })
    }

    handleFeedBack = () => {
        const data = {
            user_id: this.props.reduxState.user.id,
            comment: this.state.comment,
            place_id: this.state.locationId
        }
        console.log('did we get the right data?', data)
        this.props.dispatch({ type: FEEDBACK_ACTION.POST, payload: data })
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    handleDelete = (event) => {
        this.props.dispatch({
            type: FEEDBACK_ACTION.DELETE,
            payload: {
                review_id: event.target.value,
                place_id: this.state.locationId
            }
        })
    }

    handleToggle = (event) => {
        this.setState({
            toggleButton: !this.state.toggleButton
        });
    }
    render()  {
        let LinkA = null;
        if(this.props.user.user_type === 'viewer'){
            LinkA=
                <button id="submit" 
                    variant="contained" 
                    color="primary" 
                    onClick={this.handleFeedBack}
                >
                    Submit
                </button>
        } else{
            LinkA = ''
        }
        let feedbackReview = this.props.reduxState.feedback.review.map(((review, i) => {
            if (this.props.reduxState.user.id == review.user_id)
                return (
                    <Card id="locationCard">
      <CardContent>
        <Typography  color="textSecondary">
        </Typography>
        <Typography variant="headline" component="h2">
        </Typography>
        <Typography  color="textSecondary">

        <div key={i}>
        <img src={Stock} width="100" />
                       <h5> Your User Name is: {review.username}</h5>
                        <br></br>
                       <h5>Review:{review.comment}</h5> 
                
                    </div>
        </Typography>
        <Typography component="p">
        </Typography>
      </CardContent>
      <CardActions>
      <Button  variant="contained" color="primary" 
      value={review.review_id} 
      onClick={this.handleDelete}>Delete</Button>
      </CardActions>
    </Card>
                )
            return (
                <Card id="locationCard">
      <CardContent>

        <div key={i}>
        <img src={Stock} width="100" />
                       <h5> Your User Name is: {review.username}</h5>
                        <br></br>
                       <h5>Review:{review.comment}</h5> 
                
                    </div>
      </CardContent>
    </Card>
            )
        }))
        return (
            <div >
                <Nav />
                <h2>Give Us your FeedBack</h2>
                <header></header>
                <p>FeedBack</p>
                {feedbackReview}
                <div class='form-control-A' id="feedback" >
                    <textarea value={this.state.feedback}
                        class="form-control"
                        onChange={this.handleInputChangeFor('comment')}
                        rows="3">
                    </textarea>
                    {LinkA}
                    {/* <Button id="submit"  variant="contained" color="primary" onClick={this.handleFeedBack}>
                        Submit
                    </Button> */}
                </div>
            </div>
        )
    }

}



export default connect(mapStateToProps)(LocationInfo) 