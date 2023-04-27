import Modal from 'react-modal';
import Image from '../Image';
import CircleColor from '../../components/CircleColor';
import { numberWithCommas } from '../../utils/Func';

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

const ShowProductModal = ({
  modalIsOpen,
  closeModal,
  title,
  description,
  image,
  price,
  colors,
  category
}) => {
  /*
  === === === ===
  // Render
  === === === ===
  */

  const renderColors = colors.map((color) => {
    return <CircleColor key={color} bg={color} />;
  });

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
      <div className='border p-3 rounded-lg flex flex-col h-fit border-gray-300 overflow-hidden relative'>
        <Image src={image} alt={title} className={'rounded-lg w-full h-52  object-cover m-auto'} />
        <h4 className='font-bold mt-3'>{title}</h4>
        <p className='text-gray-500 text-sm my-2'>{description}</p>
        <p className='font-bold text-indigo-700 text-lg'>${numberWithCommas(price)}</p>
        {!colors.length ? (
          <p className='font-medium my-3'>No Available Colors!</p>
        ) : (
          <div className='my-3 flex items-center flex-wrap'>{renderColors}</div>
        )}
        <div className='flex items-center'>
          <Image
            src={category.avatar}
            alt={'nature'}
            className={'rounded-full w-10 h-10 object-cover'}
          />
          <span className='ml-2'>{category.name}</span>
        </div>
      </div>
    </Modal>
  );
};

export default ShowProductModal;
