import React from 'react';

const book = ({title, authors, description, image, link}) => {
    return (
        <div>
            <h3>{title}</h3>
            <h4>{authors}</h4>
            <p>{description}</p>
            <image src={image}/>
            <a href={link}>More Info</a>
        </div>
    );
};

export default book;