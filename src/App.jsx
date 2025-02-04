import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='bg-black text-white w-full h-screen px-20'>
      <Navbar/>
      <Home/>
      <Footer/>

    </div>
  )
}

export default App