import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import '../EditProfile/EditProfile.css'




// handleInputChangeFor = propertyName => (event) => {
//     this.setState({
//       [propertyName]: event.target.value,
//     });
//   }

class EditProfile extends Component {

    render() {
       
            return (
                <div>
                    <Nav/>
                    <h1>Edit Page</h1>
                    <form>
                        <label htmlFor="username">
                            Edit First Name:
                            <input
                                type="text"
                                name="username"
                            />
                        </label>
                    </form>
                </div>
            );
       
    }
}
const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(EditProfile);