import React from 'react';

const Book = (props) => {
const styles={
    card:{
        marginTop: "auto",
        marginBottom: "auto"
    }
}
const bookInfo = {
    title: props.title,
    authors: props.authors,
    description: props.description,
    image: props.image,
    link: props.image
}

    return (
        <div className="card container">
            <div className="row">
                <div className="col-2" style={styles.card}>
                    <img src={props.image} alt={`${props.title} cover`} />
                </div>
                <div className="col">
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <h5 className="card-title">{props.authors}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.link} target="_blank" rel="noopener noreferrer"><button className="btn-secondary">View</button></a>
                        {props.save && <button className="btn-primary" onClick={()=>props.saveBook(bookInfo)}>Save</button>}
                        {props.delete && <button className="btn-danger" onClick={()=>props.deleteBook(props.id)}>Delete</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;