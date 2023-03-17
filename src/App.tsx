import './App.css'
import NavBar from './components/NavBar/NavBar'
import Me from './components/Me/Me'
import Personal from './components/Me/Personal/Personal'
import ContactPage from './components/Contact/ContactPage'
import Proyects from './components/Proyects/Proyects'
import Footer from './components/Footer/Footer'
import {Routes, Route, Navigate} from 'react-router-dom'
import 'normalize.css';

function App() {

  
  return (
    <div className='app'>
    <NavBar/>
    <Routes>
      <Route path='/'element={<Navigate to="/me" replace />}/>
      <Route path='/me/*' element={<Me/>}/>
        <Route path='/me'element={<Navigate to="/me/personal" replace />}/>
      <Route path='/proyects' element={<Proyects/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
