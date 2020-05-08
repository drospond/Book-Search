import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';

class SearchBooks extends Component {
    state={
        query: ""
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleSubmit = (event) => {
        event.preventDefault();
        //API.search(this.state.query).then(res=>console.log(res.data));
        console.log(process.env.API_KEY);
    }

    render() {
        return (
            <div className="container">
                <SearchForm handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default SearchBooks;