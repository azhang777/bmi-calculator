export const TextBody = ({ header, paragraph }) => {
  return (
    <>
      <h2 className='text-decoration-underline'>{header}</h2>
      <p className='mb-5 fs-5'>{paragraph}</p>
    </>
  );
};
