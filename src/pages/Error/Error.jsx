import React from 'react';

const Error = () => {
    return (
        <div className='w-full lg:w-[1300px] md:w-[1300px]  mx-auto my-10'>

            <img src="https://i.ibb.co.com/YFmxpP97/images-9.jpg" className='shadow-2xl w-1/2 border-2 border-gray-500 rounded-3xl mx-auto' alt="" />
            <h1 className='flex justify-center items-center text-center text-4xl my-10 text-red-700'>404 - Page is not pound</h1>
            <p className='flex justify-center items-center text-center text-xl my-10'> Oops! The page your are looking for doesn,t exits</p>
        </div>
    );
};

export default Error;