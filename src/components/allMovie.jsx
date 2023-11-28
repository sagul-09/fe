import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../config';

function allMovie() {
  const handleDelete = async (id) => {
  const response = await fetch(BASE_URL+`/api/v1/movie/delete/${id}`, {
    method: "DELETE",

  });
  window.location.reload();
  console.log(response.data);
  }

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL+"/api/v1/movie");
        setMovies(response.data.movies);
        console.log(response.data.movies);
      } catch(err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const handleSearch = async () => {
    try {
      const response = await axios.get(BASE_URL+`/api/v1/movie/search?title=${search}`);
      setIsSearching(true);
      setSearchResults(response.data.movie);
      console.log(response.data.movie);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div>
        <label>search</label>
        <input onChange={(e)=>setSearch (e.target.value)} type="text" />
        <button onClick={handleSearch}>search</button>
      </div>
      <Link to="/add">
        <button>add</button>
      </Link>
    {!isSearching ? (
      movies.map(movie => (
        <div key={movie._id}>
          <p>{movie.title}</p>
          <p>{movie.director}</p>
          <p>{movie.year}</p>
          <p>{movie.language}</p>
          <p>{movie.genre}</p>
          <p>{movie.imdb}</p>
          <Link to={`/view/${movie._id}`}>
            <button>view</button>
          </Link> 
          <button onClick={()=>handleDelete(movie._id)}>delete</button>
        </div>
      ))
    ) : (
      <div>
        
            {
              searchResults.map(movie => (
                <div key={movie._id}>
                  <p>{movie.title}</p>
                  <p>{movie.director}</p>
                  <p>{movie.year}</p>
                  <p>{movie.language}</p>
                  <p>{movie.genre}</p>
                  <p>{movie.imdb}</p>
                  <Link to={`/view/${movie._id}`}>
                    <button>view</button>
                  </Link> 
                  <button onClick={()=>handleDelete(movie._id)}>delete</button>
                </div>
              ))
      }
      </div>
    )}
    </div>
  );
}


export default allMovie;