import React, { Component } from 'react';
import { connect } from 'react-redux';
import { redirect } from 'react-router-dom'
import Nav from '../../components/Nav/Nav';

//action
import { FEEDBACK_ACTION } from '../../redux/actions/FeedBackAction'


const mapStateToProps = state => ({
    user: state.user,
    comment: state.comment,
    reduxState: state,
});

class LocationInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locationId: this.props.match.params.id,
        };
    }
    componentDidMount() {
        this.props.dispatch({ type: FEEDBACK_ACTION.FETCH_USER })
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

    handleDelete = (event)=>{
        this.props.dispatch({ type: FEEDBACK_ACTION.DELETE, payload: event.target.value})
      }

    render() {
        console.log('asdasdas', this.props.reduxState.feedback.review)
        let feedbackReview = this.props.reduxState.feedback.review.map(((review, i) => {
            return (
                <div key={i}>
                    Comment={review.comment}
                    <button value={review.review_id} onClick={this.handleDelete}>Delete</button>
                </div>
            )
        }))
        return (
            <div>
                <Nav />
                <h2>Give Us your FeedBack</h2>
                <header></header>
                <p>Your User Name is {this.props.user.userName}</p>
                <p>FeedBack</p>
                {feedbackReview}
                <form onSubmit={this.handleFeedBack}>
                    <textarea value={this.state.feedback}
                        onChange={this.handleInputChangeFor('comment')}
                        cols={18} rows={15} />
                    <button>
                        Submit
            </button>
                </form>
                {JSON.stringify(this.state.comment)}
            </div>
        )
    }

}



export default connect(mapStateToProps)(LocationInfo) 