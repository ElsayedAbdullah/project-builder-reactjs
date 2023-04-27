const Button = ({ btnText, type = 'button', className, onClick }) => {
  return (
    <button type={type} className={`my-3 p-3 rounded-md text-white transition duration-300 focus:outline-none ${className}`} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
