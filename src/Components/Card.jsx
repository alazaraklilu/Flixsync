import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, rating, runtime, image }) => {

    return (

        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-rating">Rating: {rating}</p>
                <p className="card-runtime">Runtime: {runtime} mins</p>
            </div>
        </div>
    );

};

Card.propTypes = {

    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,

};

export default Card;

/*
Prop-types is a library that allows you to specify the type and 
shape of props that a component should receive, helping to catch 
bugs and provide documentation for component properties.
*/