import React, { useState } from 'react';

const Filterproducts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Large screen layout */}
      <ul className='hidden sm:flex font-serif justify-between text-xl border p-4 text-gray-600'>
        <li className=''>Walnuts</li>
        <li className=''>Almonds</li>
        <li className=''>Saffron</li>
        <li className=''>Gift Boxes</li>
        <li className=''>Honey</li>
        <li className=''>Pulses</li>
        <li className=''>Spices</li>
      </ul>

      {/* Small screen layout */}
      <div className='sm:hidden'>
        <button onClick={toggleAccordion} className='flex justify-between w-full font-serif text-xl border p-4 text-gray-600'>
          <span>Filter Products</span>
          <span>{isOpen ? '-' : '+'}</span>
        </button>
        {isOpen && (
          <ul className='font-serif text-xl border p-4 text-gray-600'>
            <li>Walnuts</li>
            <li>Almonds</li>
            <li>Saffron</li>
            <li>Gift Boxes</li>
            <li>Honey</li>
            <li>Pulses</li>
            <li>Spices</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Filterproducts;
