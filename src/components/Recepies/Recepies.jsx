import  { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import './container.css'
import PropTypes from 'prop-types';

const Recepies = ({ handleWantToCook }) => {

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
                        key={idx}
                        recipe={recipe}
                        
                        handleWantToCook={handleWantToCook}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

Recepies.propTypes={
    handleWantToCook:PropTypes.func.isRequired
}

export default Recepies;