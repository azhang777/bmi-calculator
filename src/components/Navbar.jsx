export const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg bg-dark bg-body-tertiary p-4'
      data-bs-theme='dark'
    >
      <div className='container-fluid '>
        <a
          className='navbar-brand'
          href='/'
        >
          BMI Calculator
        </a>
        <ul className='navbar-nav flex-row'>
          <li className='nav-item mx-2'>
            <a
              className='nav-link active'
              aria-current='page'
              href='/about'
            >
              About
            </a>
          </li>
          <li className='nav-item mx-2'>
            <a
              className='nav-link'
              href='/calculator'
            >
              Calculator
            </a>
          </li>
          <li className='nav-item mx-2'>
            <a
              className='nav-link'
              href='/chart'
            >
              Chart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
