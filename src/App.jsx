
import './App.css'
import Content from './components/Content/Content'
import Cover from './components/Cover/Cover'
import Header from './components/Header/Header'

function App() {


  return (
    <>

      <div className='max-w-full'>
        <Header></Header>
        <Cover></Cover>
        <Content></Content>
      </div>

    </>
  )
}

export default App
