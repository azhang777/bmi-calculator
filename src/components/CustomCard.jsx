export const CustomCard = ({ img, text }) => {
  return (
    <div
      class='card border-warning border-0 border-3 border-bottom d-flex justify-content-center align-items-center'
      style={{ width: "12rem" }}
    >
      <img
        src={img}
        alt='icon'
        width={100}
        height={100}
      />
      <div class='card-body'>
        <p class='card-text fw-bold'>{text}</p>
      </div>
    </div>
  );
};
