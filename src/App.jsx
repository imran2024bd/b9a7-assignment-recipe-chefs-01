
import './App.css'
import Content from './components/Content/Content'
import Cover from './components/Cover/Cover'
import Header from './components/Header/Header'
import Recepies from './components/Recepies/Recepies'

function App() {


  return (
    <>

      <div className='mx-auto'>
        <Header></Header>
        <Cover></Cover>
        <Content></Content>

        <div>
          <Recepies></Recepies>
        </div>

      </div>

    </>
  )
}

export default App
