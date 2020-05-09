import React from 'react';

const Book = ({ title, authors, description, image, link }) => {
const styles={
    card:{
        marginTop: "auto",
        marginBottom: "auto"
    }
}

    return (
        <div className="card container">
            <div className="row">
                <div className="col-2" style={styles.card}>
                    <img src={image} alt={`${title} cover`} />
                </div>
                <div className="col">
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <h5 className="card-title">{authors}</h5>
                        <p className="card-text">{description}</p>
                        <a href={link}><button className="btn-secondary">View</button></a>
                        <button className="btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;