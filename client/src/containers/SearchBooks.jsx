import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import axios from "axios";
import Book from "../components/shared/book"

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
        axios.post("/api/searchBooks",{query: this.state.query}).then(res=>this.setState({books: res.data}))
    }

    saveBook = (book) => {
        axios.post("/api/books", book).then(()=>console.log("succes")).catch(er=>console.log(er));
    }

    render() {
        return (
            <div className="container">
                <SearchForm handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit}/>
                {this.state.books.map((book)=>{
                    return <Book title={book.title} authors={book.authors} description={book.description} image={book.image} link={book.link} saveBook={this.saveBook} key={book._id} save={true}/>
                })}
            </div>
        );
    }
}

export default SearchBooks;