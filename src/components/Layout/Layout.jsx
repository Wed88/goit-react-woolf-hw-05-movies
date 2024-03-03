import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Movies">Movies</NavLink>
      </nav>
      <Outlet />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};
