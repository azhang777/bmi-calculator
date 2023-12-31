export const Chart = () => {
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th scope='col'>Measurement Units</th>
          <th scope='col'>Formula and Calculation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>Kilagrams and meters</th>
          <td>
            <p>
              Formula: weight (kg) / [height (m)]<sup>2</sup>
              <br /> <br />
              With the metric system, the formula for BMI is weight in kilograms
              divided by height in meters squared. Because height is commonly
              measured in centimeters, divide height in centimeters by 100 to
              obtain height in meters.
              <br /> <br />
              Example: Weight = 68 kg, Height = 165 cm (1.65 m)
              <br />
              Calculation: 68 ÷ (1.65)<sup>2</sup> = 24.98
            </p>
          </td>
        </tr>
        <tr>
          <th scope='row'>Pounds and inches</th>
          <td>
            <p>
              Formula: weight (lb) / [height (in)]<sup>2</sup> x 703
              <br /> <br />
              Calculate BMI by dividing weight in pounds (lbs) by height in
              inches (in) squared and multiplying by a conversion factor of 703.
              <br /> <br />
              Example: Weight = 150 lbs, Height = 5’5″ (65″)
              <br />
              Calculation: [150 ÷ (65)<sup>2</sup>] x 703 = 24.96
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
