
import './App.css'
import Cover from './components/Cover/Cover'
import Header from './components/Header/Header'
import Recepies from './components/Recepies/Recepies'

function App() {


  return (
    <>

      <div className='mx-auto'>
        <Header></Header>
        <div>
          <Cover></Cover>
          <Recepies></Recepies>
        </div>

      </div>

    </>
  )
}

export default App
