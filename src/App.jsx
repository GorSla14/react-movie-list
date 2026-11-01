import './App.css'
import { useState } from 'react'

function App() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('1')

    function addMovie(event) {
      event.preventDefault()

      if (title.trim() === '') {
        alert('Du måste ange en filmtitel!')
        return
      }

      const newMovie = { title: title, rating: Number(rating) }
      setMovies([...movies, newMovie])
      setTitle('')
      setRating('1')
    }

    function removeMovie(index) {
      setMovies(movies.filter((movie, i) => i !== index))
    
    }

    function sortByTitle() {
      const sortedMovies = [...movies].sort((a, b) =>
        a.title.localeCompare(b.title)
      )
      setMovies(sortedMovies)
    }

    function sortByRating() {
      const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating)
      setMovies(sortedMovies)
    }

  return (
    <>
      <h1>Min filmlista</h1>
      <h2>Lägg till en film</h2>

      <form onSubmit={addMovie}>
        <label htmlFor="title">Titel:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="rating">Betyg:</label>
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

      <button className="sort-btn" type="button" onClick={sortByTitle}>Sortera alfabetiskt</button>
      <button className="sort-btn" type="button" onClick={sortByRating}>Sortera efter betyg</button>

        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              <span>{movie.title}</span>
              <span className="stars">{'★'.repeat(movie.rating)}</span>
              <button className="remove-btn" onClick={() => removeMovie(index)}>✖</button>
            </li>
          ))}
        </ul>
    </>
  )
}

export default App