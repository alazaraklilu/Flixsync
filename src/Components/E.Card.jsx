import React from 'react';
import PropTypes from 'prop-types';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const Card = ({ title, rating, release, runtime, image }) => {
    return (

        <div className="card">
            <img src={image} alt={title} />
            <div className="card-title">{title}</div>
            <div className="card-rating"><b>Rating: </b>{Math.round(rating * 10) / 10 || 'N/A'}</div>
            <div className="card-release"><b>Release: </b>{formatDate(release)}</div>
            <div className="card-buttons">
                <button className="card-button">Buy Tickets</button>
                <button className="card-button">Invite</button>
            </div>
        </div>
    );
};

// Card.propTypes = {

//     title: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//     runtime: PropTypes.number.isRequired,
//     image: PropTypes.string.isRequired,

// };

export default Card;

/*
Prop-types is a library that allows you to specify the type and 
shape of props that a component should receive, helping to catch 
bugs and provide documentation for component properties.
*/