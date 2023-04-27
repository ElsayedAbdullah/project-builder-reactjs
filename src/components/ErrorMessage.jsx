const ErrorMessage = ({ msg = '' }) => {
  return msg ? <p className='mt-2 text-sm font-medium text-red-500'>{msg}</p> : null;
};

export default ErrorMessage;
