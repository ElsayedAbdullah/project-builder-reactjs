import React, { Fragment } from 'react';
import Modal from 'react-modal';
import { CATEGORIES, COLORS, productsFormInputs } from '../../lists';
import ErrorMessage from '../../components/ErrorMessage';
import FormInput from '../FormInput';
import CircleColor from '../../components/CircleColor';
import Button from '../Button';
import SelectMenu from '../SelectMenu';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '500px'
  }
};

Modal.setAppElement('#root');

const BuildProductModal = ({ tempColors, setTempColors, errors, isError, modalIsOpen, onSubmitHandler, onChangeHandler, product, setIsOpen, closeModal, setSelectedCategory, selectedCategory }) => {
  /*
  === === === ===
  // Render
  === === === ===
  */
  const renderProductInputs = productsFormInputs.map((input, idx) => {
    return (
      <Fragment key={idx}>
        <FormInput label={input.label} id={input.name} type={input.type} value={product[input.name]} onChange={onChangeHandler} />
        <ErrorMessage msg={errors[input.name]} />
      </Fragment>
    );
  });

  const renderColors = COLORS.map((color) => {
    return (
      <CircleColor
        key={color}
        bg={color}
        onClick={() => {
          if (tempColors.includes(color)) {
            setTempColors((prev) => prev.filter((item) => item !== color));
            return;
          }
          setTempColors((prev) => [...prev, color]);
        }}
      />
    );
  });

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
      <form onSubmit={onSubmitHandler}>
        <button onClick={() => setIsOpen(false)}>X</button>

        {renderProductInputs}

        <p className='font-medium text-sm mt-3'>COLORS({tempColors.length})</p>
        <p className='font-medium text-sm mt-3'>Selected Colors: {!tempColors.length ? '__' : ''}</p>
        <div>
          {tempColors.map((color) => (
            <span key={color} style={{ backgroundColor: color }} className='inline-block rounded-md text-sm p-1 text-white mr-1 cursor-pointer mb-1'>
              {color}
            </span>
          ))}
        </div>
        <div className='mt-3 flex items-center flex-wrap'>{renderColors}</div>
        <SelectMenu optionList={CATEGORIES} label='Select Category' setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
        <Button btnText={'Add Product'} type='submit' className={isError ? 'bg-red-500 w-full hover:bg-red-600' : 'bg-indigo-500 w-full hover:bg-indigo-600'}></Button>
      </form>
    </Modal>
  );
};

export default BuildProductModal;
