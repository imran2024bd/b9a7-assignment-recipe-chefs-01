import PropTypes from "prop-types";

const CurrentCook = ({ currentCook, idx }) => {
    console.log(currentCook);

    return (
        <div >
            {
                currentCook.map((cookObj , id) =>(
                    <div className="flex justify-around items-center m-12 bg-[#28282808] rounded-lg text-xs text-center space-x-6">
                        <p> {idx + 1} </p>
                        <h1>{cookObj.recipe_name}</h1>
                        <h1>{cookObj.preparing_time} minutes</h1>
                        <h1>{cookObj.calories} calories</h1>
                    </div>

                ))
            }

            {/* Total Time minutes Section */}
            
            {
            currentCook.reduce((sum , obj) => {
                    // console.log(sum + obj.preparing_time );
                    <div className=" flex justify-end bg-red-500">
                        <p>Total Time = {sum + obj.preparing_time}  minutes </p>
                        <p>Total Calories = {sum + obj.calories} calories</p>
                    </div>
                },0)
                }


            {/* {
                currentCook.map(totalCurrent => (
                    <div>
                        <p>Total Time =
                            ${totalCurrent.preparing_time} minutes</p>
                        <p>Total Calories =
                            ${totalCurrent.calories} calories</p>
                    </div>
                ))
            } */}

        </div>
    );
};



CurrentCook.propTypes = {
    currentCook: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired
}

export default CurrentCook;