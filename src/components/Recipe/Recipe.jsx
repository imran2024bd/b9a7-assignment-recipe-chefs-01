import React from 'react';

const Recipe = ({ recipe }) => {
    console.log(recipe);
    const { recipe_id, recipe_image, recipe_name, preparing_time, ingredients, short_description } = recipe;
    return (
        <div className='text-left m-10 p-5 border-2 rounded-xl'>
            <img className='w-max rounded-2xl' src={recipe_image} alt={` Recipe name of ${recipe_name}`} />
            <h1> Recipe Name : {recipe_name} </h1>
            <p><span> {short_description} </span></p>


        </div>
    );
};

export default Recipe;