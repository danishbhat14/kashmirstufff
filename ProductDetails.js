import { useParams } from 'react-router-dom';
import { data } from "./Constants";
import { useEffect } from 'react';
import { addToCart } from './CartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ProductDetails = () => {
  const { id } = useParams();

  // Find the product object with the matching id
  const product = data.find(item => item.id === parseInt(id));


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const [added, setAdded]=useState(false);

  const dispatch = useDispatch();
  const addFooditem = (product) => {
    dispatch(addToCart({...product,quantity:1}));
    setAdded(true)
  }

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between'>
        {/* Image section */}
        <div className='md:w-1/2'>
          <div className=''>
            <img className='hover:cursor-zoom-in' src={product.image} alt={product.name} />
          </div>
        </div>

        {/* Details section */}
        <div className='md:w-1/2 flex flex-col pt-4 border border-red-500 p-5'>
          <h1 className='py-4 font-serif text-gray-600 text-2xl'>{product.name}</h1>
          <h1 className='py-4 font-mono text-red-500 text-2xl'>PRICING: {product.price_per_kg}</h1>
          <h1 className='text-gray-600 line-through text-2xl font-mono'>{product.fake_p}</h1>
          <h2 className='py-4 font-serif'>Brockerage: {product.brockerage}</h2>
          <h1 className='py-4 font-mono text-xl text-green-600'>Stock: {product.stock}</h1>
          <button onClick={() => addFooditem(product)} className='p-2 m-2 bg-red-700 rounded-md font-serif text-white'> {added ? 'ADDED TO CART' : 'ADD TO CART'}</button>
        </div>

      </div>
      <h1 className='font-serif text-xl tracking-wider m-2'>{product.discription}</h1>
      <h1 className='font-mono text-2xl text-red-500'>YOU Might Also Like</h1>

    </div>


  );
}

export default ProductDetails;
