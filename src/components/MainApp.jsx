import logo from "../logo.svg";
import { About } from "./About";

export const MainApp = () => {
  return (
    <div className='container bg-dark fit text-light p-5 d-flex flex-column justify-content-between'>
      <About />
      <div className='d-flex justify-content-center'>
        <button className='btn btn-primary'>Calculate BMI</button>
      </div>
    </div>
  );
};
