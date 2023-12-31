//consider breaking each h2 + p pair as its own component info
import { TextBody } from "../components/TextBody";
import { CalculationTable } from "../components/CalculationTable";
export const About = () => {
  return (
    <>
      <header className='fs-1 d-flex justify-content-center mb-5'>
        BMI Calculator
      </header>
      <TextBody
        header='What is BMI?'
        paragraph='Body mass index (BMI) is a person’s weight in kilograms divided by the
          square of height in meters. BMI is an inexpensive and easy screening
          method for weight category—underweight, healthy weight, overweight,
          and obesity. BMI does not measure body fat directly, but BMI is
          moderately correlated with more direct measures of body fat 1,2,3.
          Furthermore, BMI appears to be as strongly correlated with various
          metabolic and disease outcome as are these more direct measures of
          body fatness'
      />
      <TextBody
        header='How is BMI used?'
        paragraph='BMI can be a screening tool, but it does not diagnose the body fatness
          or health of an individual. To determine if BMI is a health risk, a
          healthcare provider performs further assessments. Such assessments
          include skinfold thickness measurements, evaluations of diet, physical
          activity, and family history10.'
      />
      <TextBody
        header='How is BMI calculated?'
        paragraph='BMI is calculated the same way for both adults and children. The
          calculation is based on the following formulas:'
      />
      <CalculationTable />
    </>
  );
};
