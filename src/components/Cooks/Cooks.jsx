import React from 'react';
import Cook from './Cook/Cook';

const Cooks = ({ wantCook }) => {
    // console.log(cooks);
    
    // console.log(wantCook);
    
    return (
        <div className='flex justify-around border-2 rounded-xl '>
            <h1 className='text-xl font-semibold' >Want to cook: {wantCook.length} </h1>  
            <hr />        

            {
                wantCook.map((cook , idx) => <Cook
                key={idx}
                cook={cook}
                ></Cook>)
            }     

            {/* <h1>Name: {recipe_name} </h1> 
            <h1>Time: {preparing_time} </h1> 
            <h1>Calories: {calories} </h1>  */}
        </div>
    );
};

export default Cooks;