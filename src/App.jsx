
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


  return (
    <>

      <div className='mx-auto'>
        <Header></Header>
        <Cover></Cover>
        <Content></Content>

        <div className='flex items-center '>
          <Recepies
            handleWantToCook={handleWantToCook}
          ></Recepies>

          {
            wantCook.map((cooks, idx) => <Cooks
              key={idx}
              cooks={cooks}
            ></Cooks>)
          }

        </div>

      </div>

    </>
  )
}

export default App
