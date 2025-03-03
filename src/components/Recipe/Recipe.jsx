import React from 'react';
import Ingredient from '../Ingredient/Ingredient';
import { IoTimeOutline } from "react-icons/io5";
import { LiaBurnSolid } from "react-icons/lia";
import Cooks from '../Cooks/Cooks';

const Recipe = ({ recipe, handleWantToCook, wantCook }) => {
    // console.log(recipe);
    const { recipe_id, recipe_image, recipe_name, preparing_time, ingredients, short_description, calories } = recipe;
    return (
        <div className='text-left m-10 p-5 border-2 rounded-xl  '>

            <img className='w-max rounded-2xl' src={recipe_image} alt={` Recipe name of ${recipe_name}`} />

            <h1 className='mt-4 mb-4 text-2xl font-semibold'> {recipe_name} </h1>

            <p className='mt-4 mb-4'><span > {short_description} </span></p>

            <hr />
            <hr />

            <span className='text-xl font-bold'>Ingredients: {ingredients.length}</span>

            {/* ingredients part */}

            {
                ingredients.map((ingredient, idx) => <Ingredient
                    key={idx}
                    ingredient={ingredient}
                ></Ingredient>)
            }

            <hr />

            {/* preparing_time */}
            <div className='flex space-x-6 mt-6 '>
                <div className='flex items-center space-x-1'>
                    <IoTimeOutline></IoTimeOutline>
                    <p>{preparing_time} </p>
                </div>
                <div className='flex items-center space-x-1'>
                    <LiaBurnSolid></LiaBurnSolid>
                    <p> {calories} </p>
                </div>
            </div>


            <button onClick={() => handleWantToCook(recipe)} className='bg-[#0BE58A] rounded-[20px] text-sm m-4 p-4 font-bold'>Want to Cook</button>

            {
                wantCook.map(cooks =><Cooks
                cooks={cooks}
                ></Cooks>)
            }

        </div>
    );
};

export default Recipe;