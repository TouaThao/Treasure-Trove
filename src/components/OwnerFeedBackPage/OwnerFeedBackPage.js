import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';

//Matieral UI
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//import css
import '../../styles/FeedBack.css'


//importing action
import { FEEDBACK_ACTION } from '../../redux/actions/FeedBackAction'


const mapStateToProps = state => ({
    user: state.user,
    feedback: state.feedback,
    reduxState: state,
});

class OwnerFeedBackPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
        };
    }
    componentDidMount() {
        this.props.dispatch({ type: FEEDBACK_ACTION.GET });
      }

    handleFeedBack = () => {
        const data = {
          feedback: this.state.feedback
        }
        console.log('did we get the right data?', data)
        this.props.dispatch({ type: FEEDBACK_ACTION.ADD, payload: data })
      }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    handleDelete = ()=>{
        this.props.dispatch({ type:FEEDBACK_ACTION.DELETE})
    }

    render() {
            // console.log('itjeiojfois',this.props)
        return (
            <div>
                <Nav />
                <h2>Give Us your FeedBack</h2>
                <header></header>
                <p>Your User Name is {this.props.user.userName}</p>
                <p>FeedBack</p>
                <form onSubmit={this.handleFeedBack}>
                <textarea value={this.state.feedback}
                    onChange={this.handleInputChangeFor('feedback')}
                    cols={18} rows={15} />
                <button>
                    Submit
                </button>
                </form>
                {JSON.stringify(this.state.feedback)}
                <button onClick={this.handleDelete}>Delete</button>
                
            </div>
        )
    }

}
// }


export default connect(mapStateToProps)(OwnerFeedBackPage) 