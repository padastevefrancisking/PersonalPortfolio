import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Experiences from './components/Experiences'

function App() {

  return (
    <>
    <div classname="flex flex-col items-center justify-center min-h-screen bg-secondary-background">
      <Header />
      <Home id= "Home"/>
      <Experiences id="Experiences" />
    </div>
    </>
  )
}

export default App
