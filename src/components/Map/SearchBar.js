import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_LOCATION_ACTION } from '../../redux/actions/LocationAction';

//material ui
import Button from '@material-ui/core/Button';

//css
import '../../styles/SearchBar.css'

//img
import Pho from '../BackGround/Pho-Beef-Noodles-2008.jpg'
//                < img src={Pho} align="center" width="552" height="300" />

const mapStateToProps = (state) => ({
    map: state.map,
}
);



class SearchBar extends Component {

    render() {
        return (

            <div class="input-group mb-1"  >

                <input id="selector" 
                    type="text" class="form-control"
                    placeholder="Search"
                     aria-label="Default" aria-describedby="Search"
                    onChange={this.props.searchHandler}
                />
                <select id="selector"  onChange={this.props.vendorHandler}>
                    <option value=''></option>
                    <option value="foodtruck">FoodTruck</option>
                    <option value="service">Service</option>
                    <option value="restaurants">Restaurants</option>
                </select>
                <span>
                   
                    <Button id="selector" 
                        variant="contained"size="small" color="primary"
                        className="button" onClick={this.handleNewChange}>
                        search
             </Button>
             
                </span>

                {/* <button onClick={this.onChangeData.bind(this)} >Test Button</button> */}

            </div>
        )

    }
}

export default connect(mapStateToProps)(SearchBar)