import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Experiences from './components/Experiences'

function App() {

  return (
    <>
      <Header />
      <Home id= "Home"/>
      {/* Add other components here */}
      {/* <AboutMe /> */}
      <Experiences id="Experiences" />
      {/* <Contacts /> */}
      <div id="Contacts"></div>
    </>
  )
}

export default App
