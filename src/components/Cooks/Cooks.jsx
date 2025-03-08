import PropTypes from 'prop-types';
import Cook from './Cook/Cook';
import CurrentlyCook from '../CurrentlyCook/CurrentlyCook';

const Cooks = ({ wantCook , handleAddToPreparing }) => {
    // console.log(cooks);

    // console.log(wantCook);

    return (
        <div className='  border-2 rounded-xl '>
            <h1 className='text-2xl font-semibold m-2 p-2' >Want to cook: {wantCook.length} </h1>
            <hr />

            <div className='flex justify-around m-6 text-xs space-x-6'>
                <p>Sl</p>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
                <p> Btn</p>
            </div>

            {
                wantCook.map((cook, idx) => (<Cook
                    key={idx}
                    cook={cook}
                    idx={idx}
                    handleAddToPreparing={handleAddToPreparing}
                ></Cook>))
            }
            
            <CurrentlyCook
            
            ></CurrentlyCook>



        </div>
    );
};

Cooks.propTypes = {
    wantCook:PropTypes.array.isRequired ,
    handleAddToPreparing:PropTypes.func.isRequired
}

export default Cooks;