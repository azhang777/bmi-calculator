import { Link } from "react-router-dom";
import { CustomCard } from "../components/CustomCard";

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
        <Link
          to={"/calculator"}
          className='btn btn-light col-auto fs-2 rounded-pill px-5'
        >
          Get started
        </Link>
      </div>
    </div>
  );
};
