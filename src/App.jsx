import './App.css'
import { useState } from 'react'

function App() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('1')

    function addMovie(event) {
      event.preventDefault()

      const newMovie = { title: title, rating: Number(rating) }
      setMovies([...movies, newMovie])
    }

  return (
    <>
      <h1>Min filmlista</h1>

      <form onSubmit={addMovie}>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <select
          id="rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type='submit'>Lägg till film</button>
      </form>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              {movie.title} - {movie.rating}/5
            </li>
          ))}
        </ul>
    </>
  )
}

export default App