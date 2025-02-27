import React from 'react';
import profile from '../../assets/profile.png'
import search from '../../assets/search-solid.svg'

const Header = () => {
    return (
        <div className='flex justify-evenly items-center mx-auto' >
            <h1 className=' text-3xl font-bold text-left '>Recipe Calories</h1>

            <div className='flex gap-x-6  '>
                <a href="Home" > Home </a>
                <a href="Recipes">Recipes</a>
                <a href="About">About</a>
                <a href="Search">Search</a>
            </div>

            <div className=' flex w-10 space-x-6'>
                <img className='text-xl ' src={search} alt="" />
                <input className='border-solid text-slate-300' type="text" value="Search" />

                <img src={profile} alt="" />
            </div>

        </div>
    );
};

export default Header;