const CircleColor = ({ bg = 'teal', onClick }) => {
  return (
    <div
      className='w-5 h-5 rounded-full mr-1 cursor-pointer my-1'
      style={{ backgroundColor: bg }}
      onClick={onClick}
    ></div>
  );
};

export default CircleColor;
