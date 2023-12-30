import { CustomCard } from "./CustomCard";

export const Home = () => {
  return (
    <div className='container min-vh-100'>
      <div className='row py-5'>
        <h1 className='custom-font-size'>Welcome to</h1>
        <p className='lead custom-font-size'>BMI Calculator.</p>
      </div>
      <div className='row py-5'>
        <div class='row justify-content-between'>
          <div class='col-2 d-flex justify-content-center'>
            <CustomCard
              img='/check.png'
              text='Simple'
            />
          </div>
          <div class='col-2 d-flex justify-content-center'>
            <CustomCard
              img='/fast.png'
              text='Fast'
            />
          </div>
          <div class='col-2 d-flex justify-content-center'>
            <CustomCard
              img='/target.png'
              text='Effective'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
<a
  href='https://www.flaticon.com/free-icons/tick'
  title='tick icons'
>
  Tick icons created by Maxim Basinski Premium - Flaticon
</a>;
