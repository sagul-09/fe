import React from 'react';
import {useState, useEffect} from 'react';
import { useParams , useNavigate} from 'react-router-dom'

function viewMovie() {

    const params = useParams();
    const {id}= params;

    const handleUpdate = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:4000/api/v1/movie/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                director,
                year,
                language,
                genre,
                imdb
            }),
        });
        const data = await response.json();
        console.log(data);
        navigate("/");
    }

    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");
    const [language, setLanguage] = useState("");
    const [genre, setGenre] = useState("");
    const [imdb, setImdb] = useState("");

    const getMovie = async () => {
        const response = await fetch(`http://localhost:4000/api/v1/movie/get/${id}`);
        const data = await response.json();
        setTitle(data.movie.title);
        setDirector(data.movie.director);
        setYear(data.movie.year);
        setLanguage(data.movie.language);
        setGenre(data.movie.genre);
        setImdb(data.movie.imdb);
        console.log(data.movie);
    }

    useEffect(() => {
        getMovie();
    }, []);
  return (
    <div>
<form onSubmit={handleUpdate}>
<label>title</label>
<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
<label>director</label>
<input type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
<label>year</label>
<input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
<label>language</label>
<input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
<label>genre</label>
<input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
<label>imdb</label>
<input type="number" value={imdb} onChange={(e) => setImdb(e.target.value)} />

<button type='submit'>submit</button>
</form>
    </div>
  )
}

export default viewMovie