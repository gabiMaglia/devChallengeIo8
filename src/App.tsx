import './App.css'
import NavBar from './components/NavBar/NavBar'
import Main from './components/MainPage/Main'
import ContactPage from './components/Contact/ContactPage'
import Proyects from './components/Proyects/Proyects'
import Footer from './components/Footer/Footer'
import {Routes, Route} from 'react-router-dom'
import 'normalize.css';

function App() {

  
  return (
    <div className='app'>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/proyects' element={<Proyects/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
