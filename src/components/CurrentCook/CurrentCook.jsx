import PropTypes from "prop-types";

const CurrentCook = ({currentCook}) => {
    console.log(currentCook);
    const { recipe_name, preparing_time, calories} = currentCook ;
    
    return (
        <div className="flex justify-around items-center m-6 bg-[#28282808] rounded-lg text-xs text-center space-x-6">
            <h1>{recipe_name}</h1>
            <h1>{preparing_time}</h1>
            <h1>{calories}</h1>
        </div>
    );
};



CurrentCook.propTypes = {
    currentCook : PropTypes.object.isRequired
}

export default CurrentCook;