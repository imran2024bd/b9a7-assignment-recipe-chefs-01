import React from 'react';

const Cooks = ({ cooks }) => {
    console.log(cooks);
    const { recipe_name, preparing_time, calories } = cooks;
    
    return (
        <div className='flex justify-around border-2 rounded-xl'>
            <h1 className='text-xl font-semibold' >Want to cook: {cooks.length} </h1>               

            {/* <h1>Name: {recipe_name} </h1> 
            <h1>Time: {preparing_time} </h1> 
            <h1>Calories: {calories} </h1>  */}
        </div>
    );
};

export default Cooks;