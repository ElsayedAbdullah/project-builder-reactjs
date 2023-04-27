const FormInput = ({ label, id, type = 'text', value, onChange }) => {
  return (
    <div className='flex flex-col mt-4'>
      <label htmlFor={id} className='font-medium text-sm'>
        {label}
      </label>
      <input autoComplete='true' type={type} id={id} name={id} value={value} onChange={onChange} className='mt-2 border rounded-md p-3 text-base focus:outline-none focus:border-indigo-500 shadow-sm focus:ring-1' />
    </div>
  );
};

export default FormInput;
