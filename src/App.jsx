import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Work from './Components/Work.jsx'
import Service from './Components/Service.jsx'
import Contact from './Components/Contact.jsx'
import Sub from './Subscribe/Sub.jsx'
import Home1 from './Components/Home1.jsx'
import Summa from './Subscribe/Summa.jsx'
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Work' element={<Work />} />
      <Route path='/Service' element={<Service />} />
      <Route path='/Contact' element={<Contact />} /> 
      <Route path='/Subscribe' element={<Sub/>}/>
      <Route path='/Home1' element={<Home1/>}/>
      <Route path='/Summa' element={<Summa/>}/>

     </Routes>
     
    </>
  )
}

export default App
