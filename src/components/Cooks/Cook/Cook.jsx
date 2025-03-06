import React from 'react';

const Cook = ({cook}) => {
    console.log(cook);
    const { recipe_name, preparing_time, calories } = cook;
    return (
        <div className='flex justify-around'>
            <li>Name: {recipe_name} </li>
            <li>Time: {preparing_time} </li>
            <li>Calories: {calories} </li>
            
        </div>
    );
};

export default Cook;