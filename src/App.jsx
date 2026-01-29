import './App.css'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Work from './Components/Work.jsx'
import Service from './Components/Service.jsx'
import Contact from './Components/Contact.jsx'
import Sub from './Subscribe/Sub.jsx'
import Home1 from './Components/Home1.jsx'
import Fackapi from './Components/Fackapi.jsx';
import ProductView from './Components/ProductView'  
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Work' element={<Work />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Subscribe' element={<Sub />} />
        <Route path='/Home1' element={<Home1 />} />
        <Route path='/products' element={<Fackapi />} />
        <Route path='/product/:id' element={<ProductView />} /> 
      </Routes>
    </>
  )
}

export default App

