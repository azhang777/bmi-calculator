import "../App.css";
import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <div className='bg-dark min-vh-100'>
      <Navbar />
      <div className='main container text-light p-5 d-flex flex-column justify-content-between'>
        <Home />
      </div>
    </div>
  );
};
