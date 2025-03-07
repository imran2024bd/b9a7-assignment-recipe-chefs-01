import PropTypes from "prop-types";

const Cook = ({cook , idx}) => {
    // console.log(cook);
    // console.log(idx);
    const { recipe_name, preparing_time, calories} = cook;

    
    return (
        <div className='flex justify-around items-center m-6 bg-[#28282808] rounded-lg text-xs text-center space-x-6'>
            <p> {idx + 1} </p>
            <p>{recipe_name}</p>
            {/* <p>{recipe_name.slice(0,20)}</p> */}
            <p>{preparing_time}</p>
            <p>{calories}</p>
            <button className='bg-[#0BE58A] rounded-[20px] text-xs m-1 p-1 font-medium'>Preparing</button>

            
            
        </div>
    );
};

Cook.propTypes = {
    cook:PropTypes.object.isRequired,
    idx:PropTypes.number.isRequired
}

export default Cook;