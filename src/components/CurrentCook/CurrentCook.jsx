import PropTypes from "prop-types";

const CurrentCook = ({ currentCook, idx }) => {
    // console.log(currentCook);

    return (
        <div >
            {
                currentCook.map(cookObj =>(
                    <div className="flex justify-around items-center m-12 bg-[#28282808] rounded-lg text-xs text-center space-x-6">
                        <p> {idx + 1} </p>
                        <h1>{cookObj.recipe_name}</h1>
                        <h1>{cookObj.preparing_time}</h1>
                        <h1>{cookObj.calories}</h1>
                    </div>
                    
                ))
            }       
        </div>
    );
};



CurrentCook.propTypes = {
    currentCook: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired
}

export default CurrentCook;