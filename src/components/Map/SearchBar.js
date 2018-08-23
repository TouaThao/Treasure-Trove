import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_LOCATION_ACTION } from '../../redux/actions/LocationAction';

//material ui
import Button from '@material-ui/core/Button';

//css
import '../../styles/SearchBar.css'

const mapStateToProps = (state) => ({
  map: state.map,
}
);



class SearchBar extends Component {
    state = {
        filter: '',
        test:''
        
    }

    handleNewChange = event =>{
        // const { filter } = this.state;
        // const lowercasedFilter = filter.toLowerCase();
        // const filteredData = this.props.map.mapLocation.filter(item => {
        //   if (Object.keys(item).some(key =>
        //     item.address.toLowerCase().includes(lowercasedFilter))){
        //         return item;
        //     }
        //   return Object.keys(item).some(key =>
        //     item.name.toLowerCase().includes(lowercasedFilter)
        //   );
        // });
        // this.props.dispatch({ type: GET_LOCATION_ACTION.UPDATE , payload: filteredData })
        // console.log('scoobyDoo', filteredData)
        this.props.onChange(this.state.filter)
    };

    handleChange = event => {
        this.setState({ filter: event.target.value });
        
      };

    render() {
        return (
            <div class="active-cyan-4 mb-4">
            <input
            class="form-control"
            type = "text"
            aria-label="Search"
             onChange={this.handleChange}  />
           
            <Button
            variant="outlined" size="small" color="primary"
             className="button" onClick={this.handleNewChange}> 
             search
             </Button>
            {/* <button onClick={this.onChangeData.bind(this)} >Test Button</button> */}
           
          </div>
        )
    
    }
}

export default connect(mapStateToProps)(SearchBar)