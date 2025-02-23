import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='flex flex-grow mx-auto p-4  bg-gray-800 md:flex-row md:gap-8 rounded-2xl hover:-translate-y-3 lg:shadow-xl overflow-hidden'>
      <div className='md:w-1/2' >
        <img src={product.image} alt={product.name} className='w-full h-full object-cover'></img>
      </div>
      <div className='md:w-1/2 flex flex-col justify-center'>
        <h2 className='text-2xl font-semibold text-gray-400'></h2>
        <p className='text-xl font-bold text-sky-300'></p>
      </div>
      {/* <div className='space-x-4'> */}
        {/* <button class="flex items-center gap-2 px-4 py-2 text-black bg-blue-300 hover:bg-blue-400 hover:text-gray-600 rounded-lg shadow-md transition duration-300"> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
            {/* <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4h10M14 4v16m0 0h6m-6 0H8m0 0V4m0 0H4"/> */}
          {/* </svg> */}
        {/* </button> */}
        {/* <button class="flex items-center gap-2 px-4 py-2 text-black bg-red-300 hover:bg-red-400 hover:text-gray-600 rounded-lg shadow-md transition duration-300"> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
            {/* <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/> */}
          {/* </svg> */}
        {/* </button> */}
      {/* </div>  */}
    </div>
  )
}

export default ProductCard