import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        filter: '',
        filterValue: '',
        data: [
            {
                firstname: "Test",
                lastname: "yang",

            },
            {
                firstname: "tou",
                lastname: "lee",

            },
            {
                firstname: "var",
                lastname: "char",

            },
            {
                firstname: "monkey",
                lastname: "bananna",
                          
            },

          ]
    }
    
    handleNewChange = event =>{
        this.setState({ filter: this.state.filterValue })
    };

    handleChange = event => {
        this.setState({ filterValue: event.target.value });
      };


    render() {
        const { filter, data } = this.state;
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = data.filter(item => {
          return Object.keys(item).some(key =>
            item[key].toLowerCase().includes(lowercasedFilter)
          );
        });
        return (
            <div>
            <input
            type = "text"
            placeholder= "search"
             onChange={this.handleChange} />
            {filteredData.map(item => (
              <div key={item.firstname}>
                <div>
                  {item.firstname} {item.lastname}
                </div>
                
              </div>
              
            ))}
            <button onClick={this.handleNewChange}> search</button>
          </div>
        )
    }
}

export default SearchBar