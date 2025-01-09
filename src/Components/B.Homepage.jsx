import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './E.Card'; // Ensure this path is correct
// import './styles.css'; // Import the main CSS file
// import img from 'Assets/Profile Icon.jpg';

const Homepage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/now_playing?api_key=dff6fcd44bb4e0ad09ddb208b8c0c301&language=en-US&page=1`
                );
                const sortedMovies = response.data.results.sort((a, b) => {
                    return new Date(b.release_date) - new Date(a.release_date);
                });
                setMovies(sortedMovies);
            } catch (error) {
                console.error('Error fetching movies: ', error);
            }
        };

        fetchMovies();
    }, []);



    return (
        <div className="homepage">
            <div className="top-buttons">
                <button className="top-button">Watched</button>
                <button className="top-button">Calendly</button>
                <button className="top-button">Promotions</button>
            </div>
            {movies.map((movie) => (
                <Card
                    key={movie.id}
                    title={movie.title}
                    rating={movie.vote_average}
                    release={movie.release_date}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
            ))}
        </div>
    );
};


export default Homepage;

/*

{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/path_to_backdrop.jpg",
      "genre_ids": [28, 12, 14],
      "id": 12345,
      "original_language": "en",
      "original_title": "Movie Title",
      "overview": "A brief description of the movie.",
      "popularity": 123.456,
      "poster_path": "/path_to_poster.jpg",
      "release_date": "2023-07-01",
      "title": "Movie Title",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 1234
    },
    // More movie objects...
  ],
  "dates": {
    "maximum": "2023-07-30",
    "minimum": "2023-07-01"
  },
  "total_pages": 10,
  "total_results": 200
}

*/