import { useState } from "react";

export const EnglishCalculator = () => {
  const [heightInFeet, setHeightInFeet] = useState("");
  const [heightInInches, setHeightInInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBMIResult] = useState("");

  const calculateBMI = () => {
    const feetInInches = +heightInFeet * 12;
    const totalInches = +heightInInches + feetInInches;
    const weightInPounds = +weight;

    const bmi = (weightInPounds / (totalInches * totalInches)) * 703;
    setBMIResult(bmi.toFixed(2));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='container'>
        <div className='row d-flex justify-content-center text-center p-2'>
          <div className='col-6 p-3'>
            <label
              htmlFor='heightInFeet'
              className='pb-3'
            >
              Feet
            </label>
            <input
              type='number'
              id='heightInFeet'
              min={0}
              placeholder='enter feet'
              className='form-control text-center'
              value={heightInFeet}
              onChange={(e) => setHeightInFeet(e.target.value)}
              required
            />
          </div>
          <div className='col-6 p-3'>
            <label
              htmlFor='heightInInches'
              className='pb-3'
            >
              Inches
            </label>
            <input
              type='number'
              id='heightInInches'
              min={0}
              placeholder='enter inches'
              className='form-control text-center'
              value={heightInInches}
              onChange={(e) => setHeightInInches(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='row d-flex justify-content-center text-center p-3'>
          <div className='col-12 p-3'>
            <label htmlFor='weight'>Weight (pounds)</label>
          </div>
          <div className='col-auto '>
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
