import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import './container.css'

const Recepies = () => {

    const [recepies, setRecepies] = useState([]);

    useEffect(() => {
        fetch('recepies.json')
            .then(res => res.json())
            .then(data => setRecepies(data))
        // .then(data => console.log(data))
    }, [])

    return (
        <div className='mt-10'>

            {/* <h1> Recepies: {recepies.length} </h1> */}

            <div className='recipe-container'>
                {
                    recepies.map((recipe, idx) => <Recipe
                        key={recipe.idx}
                        recipe={recipe}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recepies;