import { useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import Button from './shared/Button';
import { nanoid } from 'nanoid';
import BuildProductModal from './shared/Modal/BuildProductModal';
import { CATEGORIES, PRODUCTS } from './lists';
import { addProductValidation } from './validation/productValidation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify';
import HeroSection from './components/HeroSection';
import './App.css';

function App() {
  /*
  === === === ===
  // State
  === === === ===
  */
  const [modalIsOpen, setIsOpen] = useState(false);
  const [productList, setProductList] = useState(PRODUCTS);
  const [tempColors, setTempColors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [product, setProduct] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    category: {},
    colors: []
  });
  const [errors, setErrors] = useState({
    ...product
  });
  const [isError, setIsError] = useState(false);

  /*
  === === === ===
  // Handler
  === === === ===
  */
  const onChangeHandler = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (Object.keys(addProductValidation(product)).length) {
      setErrors(addProductValidation(product));
      setIsError(true);
      return;
    }

    setProductList((prev) => [
      { ...product, id: nanoid(), colors: tempColors, category: selectedCategory },
      ...prev
    ]);

    setTempColors([]);
    setIsError(false);

    // setProduct({
    //   title: '',
    //   description: '',
    //   image: '',
    //   price: ''
    // });
  };

  const DeleteProduct = (id) => {
    setProductList(productList.filter((product) => id !== product.id));
    // Toastify Message
    toast.error('✋ Product has been removed', {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
      theme: 'light'
    });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {/* <HeroSection setIsOpen={setIsOpen} /> */}
      <div className='container relative z-5 pt-20'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <h2 className='font-bold text-3xl tracking-tight text-gray-900 sm:text-6xl'>
            Latest <span className='text-indigo-600'>Products</span>
          </h2>
          <Button
            onClick={() => setIsOpen(true)}
            btnText='Build now'
            className='bg-indigo-500 w-fit hover:bg-indigo-600'
          ></Button>
        </div>

        <div className='mt-5 grid grid-cols-product-grid gap-4'>
          {productList.map((product) => (
            <ProductCard key={product.id} {...product} DeleteProduct={DeleteProduct} />
          ))}
        </div>

        <BuildProductModal
          modalIsOpen={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
          setIsOpen={setIsOpen}
          onSubmitHandler={onSubmitHandler}
          onChangeHandler={onChangeHandler}
          product={product}
          errors={errors}
          isError={isError}
          setTempColors={setTempColors}
          tempColors={tempColors}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
