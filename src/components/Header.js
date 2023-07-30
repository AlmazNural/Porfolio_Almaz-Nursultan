import React from 'react';
import {FaFeatherAlt} from 'react-icons/fa';


const Header = () => {
return (
  <header className='py-8'>
    <div className='container mx-auto gap-y-10'>
      <div className='flex justify-between items-start '>
        
        <a href='#'> <FaFeatherAlt/> </a>

        <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 '>

        {/* <button className='btn btn-sm'>
          Work with me
        </button> */}

        <button className='btn btn-sm'>
          Work with me
        </button>

        </div>
      </div>
    </div>

  </header>
)
};

export default Header;
