import React, { useState } from 'react';
import "../assets/movie.css"

function MovieReview() {
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieId = "123"; // replace with the actual movie ID
    fetch(`http://localhost:8081/movie/${movieId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "movieId": movieId
      },
      body: JSON.stringify({ title, review })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setTitle('');
      setReview('');
    })
    .catch(error => {
      console.error(error);
    });
  };
  

  return (
    <div className="movie-review-form">
      <h2>Submit a Movie Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Movie Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default MovieReview;
