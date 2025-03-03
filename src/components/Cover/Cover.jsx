import React from 'react';

import './Cover.css'

const Cover = () => {
    
    return (
        <div className='bg-image text-white mt-10 text-center py-20 mx-auto'>
            <h1 className='text-6xl font-bold text-center w-2/3 mx-auto '>Discover an exceptional cooking class tailored for you!</h1>

            <p className='py-6'>Discover delicious and nutritious vegetarian recipes perfect for any meal.</p>

            <div className='flex justify-center space-x-10 py-6 text-2xl'>
                <button className='bg-[#0BE58A] rounded-2xl text-center p-4'>Explore Now</button>
                <button className='rounded-2xl text-center p-4 border-2 border-dashed'>Our Feedback</button>
            </div>
        </div>
        
        
    );
};

export default Cover;