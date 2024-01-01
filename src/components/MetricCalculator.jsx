import { useState } from "react";

export const MetricCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBMIResult] = useState("");

  const calculateBMI = () => {
    //weight (kg) / [height (m)]2 convert cm to m => cm / 100 = m
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    setBMIResult(bmi.toFixed(2));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='container'>
        <div className='row d-flex justify-content-center text-center p-3'>
          <div className='col-12 p-3'>
            <label htmlFor='height'>Height (cm)</label>
          </div>
          <div className='col-auto '>
            <input
              type='number'
              id='height'
              min={0}
              placeholder='enter height'
              className='form-control text-center'
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='row d-flex justify-content-center text-center p-3'>
          <div className='col-12 p-3'>
            <label htmlFor='weight'>Weight (kg)</label>
          </div>
          <div className='col-auto'>
            <input
              type='number'
              id='weight'
              min={0}
              placeholder='enter weight'
              className='form-control text-center'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='row d-flex justify-content-center text-center p-3'>
          <div className='col-12 p-3'>
            <button
              type='submit'
              className='btn btn-dark px-3 fs-5 rounded-pill border-0 shadow-sm'
            >
              Calculate
            </button>
          </div>
        </div>
        <div className='row d-flex justify-content-center text-center p-3'>
          <div className='col-12 p-3'>
            {bmiResult && <p className='fs-1'>Your BMI is: {bmiResult}</p>}
          </div>
        </div>
      </div>
    </form>
  );
};
