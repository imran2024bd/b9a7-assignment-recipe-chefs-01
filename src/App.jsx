
import { useState } from 'react'
import './App.css'
import Content from './components/Content/Content'

import Cover from './components/Cover/Cover'
import Header from './components/Header/Header'
import Recepies from './components/Recepies/Recepies'
import Cooks from './components/Cooks/Cooks'


function App() {

  const [wantCook, setWantCook] = useState([])

  const handleWantToCook = (recipe) => {
    // console.log(" Add to handleWantToCook");
    // console.log(recipe);
    const newCook = [...wantCook, recipe]
    setWantCook(newCook);
    // console.log(wantCook);
  }

  const [currentCooks, setCurrentCooks] = useState([]);

  const handleAddToPreparing = (id) => {
    // console.log("Prepare");
    // console.log(id);
    const remainingCook = wantCook.filter((cook) => cook.recipe_id != id)
    // console.log(remainingCook);
    setWantCook(remainingCook);

    const currentCook = wantCook.filter((cook) => cook.recipe_id == id)
    // console.log(currentCook);
    const newCurrentCook = [...currentCooks, currentCook]
    // console.log(newCurrentCook);
    setCurrentCooks(newCurrentCook);
  }

  console.log(currentCooks);
  
  return (
    <>

      <div className='mx-auto'>
        <Header></Header>
        <Cover></Cover>
        <Content></Content>

        <div className='flex items-center   '>
          <div className='w-2/3'>
            <Recepies
              handleWantToCook={handleWantToCook}
            ></Recepies>
          </div>

          <div className='w-1/3'>
            <Cooks
              wantCook={wantCook}
              handleAddToPreparing={handleAddToPreparing}
              currentCooks={currentCooks}
            ></Cooks>

          </div>
        </div>

      </div>

    </>
  )
}

export default App 
