import React, { Component } from 'react';
import axios from "axios";
import Book from "../components/shared/book"

class SavedBooks extends Component {
    state={
        books: []
    }

    componentDidMount(){
        axios.get("/api/books").then(res=>this.setState({books:res.data}))
    }

    deleteBook = async (id) => {
        await axios.delete(`/api/books/${id}`).then(()=>console.log("Bokk deleted"));
        await axios.get("/api/books").then(res=>this.setState({books:res.data}));
    }

    render() {
        return (
            <div className="container">
                <h1>Saved Books</h1>
                {this.state.books.map((book)=>{
                    return <Book title={book.title} authors={book.authors} description={book.description} image={book.image} link={book.link} key={book._id} id={book._id} deleteBook={this.deleteBook} delete={true}/>
                })}
            </div>
        );
    }
}

export default SavedBooks;