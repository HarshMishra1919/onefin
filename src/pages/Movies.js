import { useEffect, useState } from 'react';
import axios from 'axios';
import './Movies.css';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';

const Movies = (props) => {
    const url = 'https://demo.credy.in/api/v1/maya/movies/?page=';

    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const { searchTerm } = props;

    const fetchMovies = async () => {
        try {
            setIsPending(true);
            const res = await axios.get(url + page, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('authToken')}`,
                },
            });
            if (res) {
                setMovies(res.data.results);
            } else {
                throw new Error('Movies not found');
            }
            setIsPending(false);
            setError(null);
        } catch (e) {
            setError(e);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [page]);

    if (error) {
        return (
            <div className="error">
                <p>{error}</p>
                <button onClick={fetchMovies}>Refresh</button>
            </div>
        );
    } else {
        return (
            <div className="movies">
                <div className="movies-list">
                    {isPending && <p>Loading...</p>}
                    {!isPending &&
                        movies &&
                        movies
                            .filter((movie) => {
                                if (searchTerm == "") {
                                    return movie;
                                } else if (
                                    movie.title
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase())
                                ) {
                                    return movie;
                                }
                            })
                            .map((movie) => (
                                <MovieCard
                                    key={movie.uuid}
                                    title={movie.title}
                                    description={movie.description}
                                    genres={movie.genres}
                                />
                            ))}
                </div>
                <Footer setPage={setPage} />
            </div>
        );
    }
};

export default Movies;
