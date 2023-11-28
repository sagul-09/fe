import React from 'react'
import {useState} from 'react';
import axios from 'axios';

function addMovie() {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");
    const [language, setLanguage] = useState("");
    const [genre, setGenre] = useState("");
    const [imdb, setImdb] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:4000/api/v1/movie/add", {
                title,
                director,
                year,
                language,
                genre,
                imdb,
            });
            console.log(response);
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Director</label>
            <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
            <label>Year</label>
            <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
            <label>Language</label>
            <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
            <label>Genre</label>
            <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
            <label>Imdb</label>
            <input type="number" value={imdb} onChange={(e) => setImdb(e.target.value)} />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default addMovie