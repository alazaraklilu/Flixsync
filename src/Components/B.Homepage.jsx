import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Homepage = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchMovies = async () => {

            try {

                const response = await axios.get('https://imdb-api.com/en/API/InTheaters/YOUR_IMDB_API_KEY');
                setMovies(response.data.items.slice(0, 3));

            } catch (error) {

                console.error('Error fetching movies: ', error);

            }

        };

        fetchMovies();

    }, []);


    return (

        <div className="homepage">

            {movies.map(map => (

                <Card
                    key={movie.id}
                    title={movie.title}
                    rating={movie.imDbRating}
                    runtime={movie.runtimeMins || 'N/A'}
                    image={movie.image}
                />
            ))}
        </div>
    );
};

export default Homepage;


