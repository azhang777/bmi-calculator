export const CustomCard = ({ img, text }) => {
  return (
    <div
      className='card bg-transparent text-light border-0 d-flex justify-content-center align-items-center'
      style={{ width: "12rem" }}
    >
      <img
        src={img}
        alt='icon'
        width={150}
        height={150}
        className='icon'
      />
      <div className='card-body'>
        <p className='card-text fw-bold fs-3 py-5'>{text}</p>
      </div>
    </div>
  );
};
