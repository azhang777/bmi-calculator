export const Chart = () => {
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th scope='col'>BMI Measurement</th>
          <th scope='col'>Weight Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>Below 18.5</th>
          <td>
            <p>
              <strong>Underweight</strong>
              <br /> <br />
              Your BMI indicates underweight status. Discuss with your
              healthcare provider as BMI may relate to your overall health and
              well-being. Your healthcare provider might determine possible
              reasons for underweight and recommend support or treatment.
            </p>
          </td>
        </tr>
        <tr>
          <th scope='row'>18.5 - 24.9</th>
          <td>
            <p>
              <strong>Healthy Weight</strong>
              <br /> <br />
              Your BMI indicates healthy weight status. Maintaining a weight in
              the healthy BMI range is one way to support overall health as you
              age.
            </p>
          </td>
        </tr>
        <tr>
          <th scope='row'>25.0 - 29.9</th>
          <td>
            <p>
              <strong>Overweight</strong>
              <br /> <br />
              Your BMI indicates overweight status. Discuss your BMI category
              with your healthcare provider as BMI may relate to your overall
              health and well-being. Your healthcare provider might determine
              possible reasons for overweight and recommend support or
              treatment. Having excess weight can increase risk for chronic
              conditions, such as high blood pressure, type 2 diabetes, and high
              cholesterol.
            </p>
          </td>
        </tr>
        <tr>
          <th scope='row'>30.0 and Above</th>
          <td>
            <p>
              <strong>Obesity</strong>
              <br /> <br />
              Your BMI indicates obesity status. Discuss with your healthcare
              provider as BMI may relate to your overall health and well-being.
              Your healthcare provider might determine possible reasons for
              overweight and recommend support or treatment. Having excess
              weight can increase risk for chronic conditions, such as high
              blood pressure, type 2 diabetes, and high cholesterol.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
