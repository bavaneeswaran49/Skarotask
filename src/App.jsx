import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Work from './Components/Work.jsx'
import Service from './Components/Service.jsx'
import Contact from './Components/Contact.jsx'
// import Navbar from './Components/Navbar.jsx'
function App() {
  return (
    <>
     {/* <Navbar /> */}
     {/* <Home  /> */}
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Work' element={<Work />} />
      <Route path='/Service' element={<Service />} />
      <Route path='/Contact' element={<Contact />} /> 
     </Routes>
    </>
  )
}

export default App
