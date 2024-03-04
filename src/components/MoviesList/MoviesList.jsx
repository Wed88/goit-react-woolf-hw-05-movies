import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ items }) => {
  const location = useLocation();

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
