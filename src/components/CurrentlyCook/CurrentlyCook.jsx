

const CurrentlyCook = ({currentCook}) => {
    console.log(currentCook);
    return (
        <div>
            <h1 className='text-2xl font-semibold m-2 p-2'>Currently cooking:</h1>
            <hr />
            <div className='flex justify-around m-6 text-xs space-x-6'>
                <p>Sl</p>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
              
            </div>
        </div>
    );
};

export default CurrentlyCook;