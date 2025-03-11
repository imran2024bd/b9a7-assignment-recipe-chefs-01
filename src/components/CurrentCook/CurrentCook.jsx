import PropTypes from "prop-types";
import { useState } from "react";

const CurrentCook = ({ currentCook, idx }) => {
    console.log(currentCook);

    const [items, setItems] =useState(currentCook)
    console.log(items);

    const totalTime = items.reduce((sum , obj) => sum + obj.preparing_time , 0)
    // const totalPrice = items.reduce((sum, obj) => sum + obj.price, 0);
    console.log(totalTime);

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
                <div className=" flex justify-items-end">
                <h1>Total Time: {totalTime} minutes</h1>
                <ul>
                  {items.map((item) => (
                    <li key={item.id}>
                      Total calories {item.id}: {item.calories} calories
                    </li>
                  ))}
                </ul>
              </div>
            } 

            {/* {
            currentCook.reduce((sum , obj) => {
                    // console.log(sum + obj.preparing_time );
                    <div className=" flex justify-end bg-red-500">
                        <p>Total Time = {sum + obj.preparing_time}  minutes </p>
                        <p>Total Calories = {sum + obj.calories} calories</p>
                    </div>
                },0)
                } */}


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