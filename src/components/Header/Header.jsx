import React from 'react';
import profile from '../../assets/profile.png'
import icon from '../../assets/fare.png'

const Header = () => {
    return (
        <div className='flex justify-around items-center '>
            <div>
                <h1 className='text-3xl font-bold text-left '>Recipe Calories</h1>
            </div>
            <div className='flex space-x-4 font-medium'>
                <a href="">Home </a>
                <a href="">Recipes </a>
                <a href="">About </a>
                <a href="">Search </a>
            </div>
            <div className='flex space-x-20 items-center '>
                <div className='flex space-x-4 h-9 items-center bg-slate-300 rounded-xl m-2 p-6 '>
                    <img src= {icon} alt="" />
                    <input type="text" value='Search' />
                </div>
                <div>
                    <img className='w-9' src={profile} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;