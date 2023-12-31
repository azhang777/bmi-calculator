import { Link } from "react-router-dom";
import { Chart } from "../components/Chart";

export const ChartPage = () => {
  return (
    <div className='container py-5'>
      <div className='row py-3'>
        <Chart />
      </div>
      <div className='row py-3 text-center fs-3 lead'>
        <p>
          **BMI is a screening measure and is not intended to diagnose disease
          or illness.**
        </p>
      </div>
      <div className='row py-3'>
        <div className='col-6 d-flex justify-content-end'>
          <Link
            to={"/about"}
            className='btn btn-light fs-4 rounded-pill px-4 custom-btn-sizing'
          >
            About
          </Link>
        </div>
        <div className='col-6 d-flex justify-content-start'>
          <Link
            to={"/calculator"}
            className='btn btn-light fs-4 rounded-pill px-4 custom-btn-sizing'
          >
            Calculator
          </Link>
        </div>
      </div>
    </div>
  );
};
