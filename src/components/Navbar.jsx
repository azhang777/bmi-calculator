import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg bg-dark bg-body-tertiary p-4'
      data-bs-theme='dark'
    >
      <div className='container-fluid '>
        <Link
          to={"/"}
          className='navbar-brand'
          href='/'
        >
          BMI Calculator
        </Link>
        <ul className='navbar-nav flex-row'>
          <li className='nav-item mx-2'>
            <Link
              to={"/about"}
              className='nav-link '
            >
              About
            </Link>
          </li>
          <li className='nav-item mx-2'>
            <Link
              to={"/calculator"}
              className='nav-link'
            >
              Calculator
            </Link>
          </li>
          <li className='nav-item mx-2'>
            <Link
              to={"/chart"}
              className='nav-link'
            >
              Chart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

//Link to is the better alternative to a href for creating navigation links. It is because it maintains the SPA behavior by allowing navigation without full reloads. notice the difference if u change it back to ahref
//Use ahref to reach links outside of the SPA like linkedin or github
