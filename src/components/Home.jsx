import { CustomCard } from "./CustomCard";

export const Home = () => {
  return (
    <div className='home container'>
      <div className='row py-5'>
        <h1 className='custom-font-size'>Welcome to</h1>
        <p className='lead custom-font-size'>BMI Calculator.</p>
      </div>
      <div className='row py-5 justify-content-between'>
        <div className='col-2 d-flex justify-content-center'>
          <CustomCard
            img='/check.png'
            text='Simple'
          />
        </div>
        <div className='col-2 d-flex justify-content-center'>
          <CustomCard
            img='/fast.png'
            text='Fast'
          />
        </div>
        <div className='col-2 d-flex justify-content-center'>
          <CustomCard
            img='/target.png'
            text='Effective'
          />
        </div>
      </div>
      <div className='row py-5 justify-content-center'>
        <button
          className='btn btn-light col-auto fs-2 rounded-pill px-5'
          onClick={() => console.log("Button clicked")}
        >
          Get started
        </button>
      </div>
    </div>
  );
};
