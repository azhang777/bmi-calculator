import { useState } from "react";
import { MetricCalculator } from "./MetricCalculator";
import { EnglishCalculator } from "./EnglishCalculator";

export const Calculator = () => {
  const [isMetric, setMetric] = useState(false);

  const handleChange = () => {
    setMetric((prevState) => !prevState);
  };

  return (
    <div className='container d-flex flex-column'>
      <div className='row pb-3 text-center'>
        <div>
          <button
            type='button'
            className='btn btn-dark px-5 fs-5 rounded-pill border-0 shadow-sm '
            onClick={handleChange}
          >
            {isMetric ? "English" : "Metric"}
          </button>
        </div>
      </div>
      <div className='row pb-5 '>
        {isMetric ? <MetricCalculator /> : <EnglishCalculator />}
      </div>
    </div>
  );
};
