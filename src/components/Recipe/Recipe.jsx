import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

const Recipe = ({ recipe }) => {
    // console.log(recipe);
    const { recipe_id, recipe_image, recipe_name, preparing_time, ingredients, short_description } = recipe;
    return (
        <div className='text-left m-10 p-5 border-2 rounded-xl '>
            <img className='w-max rounded-2xl' src={recipe_image} alt={` Recipe name of ${recipe_name}`} />
            <h1 className='mt-4 mb-4 text-2xl'> Recipe Name : {recipe_name} </h1>
            <p><span className='mb-4'> {short_description} </span></p>

            <span className='text-xl font-bold py-5'>Ingredients: {ingredients.length}</span>

            {
                ingredients.map((ingredient , idx) => <Ingredient
                key={idx}
                ingredient={ingredient}
                ></Ingredient>)
            }

            <button>Want to Cook</button>


        </div>
    );
};

export default Recipe;