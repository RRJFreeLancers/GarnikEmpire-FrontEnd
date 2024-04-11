import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Common/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Common/Footer';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {

  return (
    <>
     <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
     </BrowserRouter>
    <Footer/>  
    </>
  )
}

export default App
