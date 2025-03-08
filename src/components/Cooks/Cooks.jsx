import PropTypes from 'prop-types';
import Cook from './Cook/Cook';
import CurrentCook from '../CurrentCook/CurrentCook';


const Cooks = ({ wantCook, handleAddToPreparing, currentCooks }) => {
    // console.log(cooks);

    // console.log(wantCook);

    // console.log(currentCooks);

    return (
        <div className='  border-2 rounded-xl '>
            <h1 className='text-2xl font-semibold m-2 p-2' > Want to cook: {wantCook.length} </h1>
            <hr />

            <div className='flex justify-around m-6 text-xs space-x-6'>
                <p>Sl</p>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
                {/* <p> Btn</p> */}
            </div>

            {
                wantCook.map((cook, idx) => (<Cook
                    key={idx}
                    cook={cook}
                    idx={idx}
                    handleAddToPreparing={handleAddToPreparing}
                ></Cook>))
            }

            <hr />

            <h1 className='text-2xl font-semibold m-2 p-2'> Currently cooking: {currentCooks.length} </h1>
            <hr />

            <div className='flex justify-around m-6 text-xs space-x-6'>
                <p>Sl</p>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>

            {
                currentCooks.map((currentCook, idx) => <CurrentCook
                    key={idx}
                    currentCook={currentCook}
                ></CurrentCook>)
            }



        </div>
    );
};

Cooks.propTypes = {
    wantCook: PropTypes.array.isRequired,
    handleAddToPreparing: PropTypes.func.isRequired,
    currentCooks: PropTypes.func.isRequired
}

export default Cooks;