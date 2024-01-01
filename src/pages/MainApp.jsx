import "../App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "../components/Navbar";
import { ChartPage } from "./ChartPage";
import { CalculationPage } from "./CalculationPage";
export const MainApp = () => {
  return (
    <Router>
      <div className='bg-dark min-vh-100'>
        <Navbar />
        <div className='main container text-light p-5 d-flex flex-column justify-content-between'>
          <Routes>
            <Route
              path='/'
              Component={Home}
            />
            <Route
              path='/about'
              Component={About}
            />
            <Route
              path='/calculator'
              Component={CalculationPage}
            />
            <Route
              path='/chart'
              Component={ChartPage}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
