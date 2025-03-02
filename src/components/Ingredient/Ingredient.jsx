import React from 'react';

const Ingredient = ({ ingredient }) => {
    console.log(ingredient);

    return (
        <div className='ml-6 '>
            <li className='space-y-5'>
                {ingredient}
            </li>
        </div>
    );
};

export default Ingredient;