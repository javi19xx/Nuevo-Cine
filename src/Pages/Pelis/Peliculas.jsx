import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Peliculas.css';
import Detalles from '../../components/Detalles';
import { fetchPopularMovies, searchMovies } from './Api.jsx';

const Peliculas = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  const handleSearch = async () => {
    const data = await searchMovies(query);
    setMovies(data);
  };


  return (
    <div className='p-5'>
      <br /><br /><br /><br /><br /><br />
      <div className='text-center'>
        <input className="p-3 text-lg border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500 transition-colors duration-300 items-center"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Escriba el título"
        />
      </div>
      
      <br />
      <br />
      <button className='boton' onClick={handleSearch}>Buscar</button>
      <br /><br />
      <ul className='grid grid-cols-4 gap-5 p-5 '>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/pelicula/${movie.id}`} className="flex flex-col items-center">
              {movie.poster_path && (
                <img className='w-64'
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={`Poster de ${movie.title}`}
                />
              )}
              <h3 className='text-center text-black font-bold mt-3'>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
      {selectedMovieId && <Detalles id={selectedMovieId} />}
      <br /><br /><br />
    </div>
  );
};

export default Peliculas;
