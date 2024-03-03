import { Link } from 'react-router-dom';

export const MoviesList = ({ items, location }) => {
  return (
    <ul>
      {items.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
