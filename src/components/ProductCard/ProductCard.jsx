import Image from '../../shared/Image';
import ShowProductModal from '../../shared/Modal/ShowProductModal';
import { numberWithCommas, trimString } from '../../utils/Func';
import CircleColor from '../CircleColor';
import EyeIcon from '../svg/EyeIcon';
import TrashIcon from '../svg/TrashIcon';

const ProductCard = ({ id, title, description, image, price, colors, category, DeleteProduct }) => {
  const COLORS_MAX_LENGTH = 4;
  const renderColors = colors.slice(0, COLORS_MAX_LENGTH).map((color) => {
    return <CircleColor key={color} bg={color} />;
  });

  return (
    <div className='border p-3 rounded-lg flex flex-col h-fit border-gray-300 overflow-hidden relative'>
      <Image src={image} alt={'nature'} className={'rounded-lg w-full h-52  object-cover m-auto'} />
      <h4 className='font-bold mt-3'>{title}</h4>
      <p className='text-gray-500 text-sm my-2'>{trimString(description, 120)}</p>
      <p className='font-bold text-indigo-700 text-lg'>${numberWithCommas(price)}</p>
      {!colors.length ? (
        <p className='font-medium my-3'>No Available Colors!</p>
      ) : (
        <div className='my-3 flex items-center flex-wrap'>
          {renderColors}
          {colors.length >= COLORS_MAX_LENGTH && colors.length - COLORS_MAX_LENGTH ? (
            <p className='font-bold'>{`+ ${colors.length - COLORS_MAX_LENGTH}`}</p>
          ) : null}
        </div>
      )}
      <div className='flex items-center'>
        <Image
          src={category.avatar}
          alt={'nature'}
          className={'rounded-full w-10 h-10 object-cover'}
        />
        <span className='ml-2'>{category.name}</span>
      </div>

      <div
        className='absolute bg-white shadow-md hover:shadow-lg duration-200 rounded-full p-1 top-6 right-5 cursor-pointer'
        onClick={() => {
          DeleteProduct(id);
        }}
      >
        <TrashIcon />
      </div>
      <div className='absolute top-16 bg-white shadow-md hover:shadow-lg duration-200 rounded-full p-1 right-5 cursor-pointer'>
        <EyeIcon />
      </div>
    </div>
  );
};

export default ProductCard;
