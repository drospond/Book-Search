import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import axios from "axios";

class SearchBooks extends Component {
    state={
        query: "",
        books: []
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.query);
        axios.post("/api/searchBooks",{query: this.state.query}).then(res=>console.log(res.data))
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