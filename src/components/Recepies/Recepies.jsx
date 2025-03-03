import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import './container.css'

const Recepies = () => {

    const [recepies, setRecepies] = useState([]);
    const [wantCook, setWantCook] = useState([])

    useEffect(() => {
        fetch('recepies.json')
            .then(res => res.json())
            .then(data => setRecepies(data))
        // .then(data => console.log(data))
    }, [])

    const handleWantToCook = (recipe) => {
        console.log(" Add to handleWantToCook");
        console.log(recipe);

    }

    return (
        <div className='mt-10'>

            {/* <h1> Recepies: {recepies.length} </h1> */}

            <div className='recipe-container'>
                {
                    recepies.map((recipe, idx) => <Recipe
                        key={idx}
                        recipe={recipe}
                        handleWantToCook={handleWantToCook}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recepies;