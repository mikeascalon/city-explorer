
export default function MovieList({ movies }) {
    return (
      <div>
        <h2>Movies</h2>
        {movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    );
  }