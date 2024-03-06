import { MovieCard, Image, Container } from './MovieItem.styled';

export const MovieItem = ({ movieItem }) => {
  const {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieItem;

  const defaultImg =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

  return (
    <MovieCard>
      <Image>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt="poster"
        />
      </Image>
      <Container>
        <h1>
          {title || name}
          {release_date && <span>({release_date.slice(0, 4)})</span>}
        </h1>
        <p>User score: {Math.round((vote_average * 100) / 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>

        {genres && (
          <>
            <h3>Genres</h3>
            <ul>
              {movieItem.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </>
        )}
      </Container>
    </MovieCard>
  );
};
