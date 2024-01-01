import { Chart } from "../components/Chart";
import { Calculator } from "../components/Calculator";

export const CalculationPage = () => {
  return (
    <div className='container bg-secondary rounded-2 my-5 py-5'>
      <div className='row'>
        <div className='col-md-5 py-2'>
          <Calculator />
        </div>
        <div className='col-md-7 '>
          <Chart />
        </div>
      </div>
    </div>
  );
};
