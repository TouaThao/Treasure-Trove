// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Nav from '../../components/Nav/Nav';

// //Style

// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

// //action
// import { GET_NEWUPDATEINFO } from '../../redux/actions/UpdateUserAction'
// import { USER_ACTIONS } from '../../redux/actions/userActions';


// class EditProfile extends Component {

//     constructor(props){
//         super(props);
//         this.state={
//             firstname:'',
//             lastname:'',
//             city:'',
//         }
//     }

//     componentDidMount(){
//         this.props.dispatch({ type: USER_ACTIONS.FETCH_USER })
//     }

//     handleUpdateInfoAndPushIt = ()=>{
//         const data ={
//             firstname:this.state.firstname,
//             lastname:this.state.lastname,
//             city:this.state.city
//         }
//         console.log('Did this work??', data)
//         this.props.dispatch({ type: USER_ACTIONS.ADD_NEWINFO,payload: [this.props.user.id,data]})
//     }

//     handleInputChangeFor = propertyName => (event) => {
//         this.setState({
//           [propertyName]: event.target.value,
//         });
//       }

//     render() {
//         console.log('WE Testing', this.props.user)
//         return (
            
//             <div>
//                 <Nav />
//                 <form onSubmit= {this.handleUpdateInfoAndPushIt}>
//                 <h3 id = 'center Edit'>Edit Page</h3>
//                     <TextField
//                         id="First Name"
//                         label="First Name"
//                         margin="normal"
//                         onChange={this.handleInputChangeFor('firstname')}
//                     />
//                     <TextField
//                         id="name"
//                         label="Last Name"
//                         margin="normal"
//                         onChange={this.handleInputChangeFor('lastname')}
//                     />
//                     <TextField
//                         id="name"
//                         label=" City "
//                         margin="normal"
//                         onChange={this.handleInputChangeFor('city')}
//                     />
//                     <ul>
//                         <Button
//                             color="primary"
//                             type="submit"
//                             name="submit"
//                             value="Register"
//                         >Register
//                     </Button>
//                     </ul>
//                 </form>
//             </div>
//         );

//     }
// }
// const mapStateToProps = state => ({
//     user: state.user,
//     // userinfo: state.userinfo
//   });

// export default connect(mapStateToProps)(EditProfile);