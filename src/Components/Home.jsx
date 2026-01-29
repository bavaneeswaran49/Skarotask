import '../App.css'
import About from './About'
import Navbar from './Navbar'
import Service from './Service'
import Work from './Work'
import Contact from './Contact'
export default function Home() {
  return (
    <>
      <Navbar />
      <section className='homeSection' id='home'>
        <div className='home-content container' >
          <h1 className='homeContent '>A DIGITAL<br></br> AGENCY.</h1>
        </div>
        <div className='home-sub1 container '>
          <div className='row'>
            <div className='col-md-4 Subcontant1'>
              <i className="fa-regular fa-calendar icon1"></i>
              <h2 className='subcontant-h2'>Business Strategy</h2>
              <p className='subcontant-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias placeat doloremque sed, distinctio nesciunt porro officia quas rem eveniet, vel vitae non dolor error excepturi dolores possimus corporis facere.</p>
            </div>
            <div className='col-md-4 Subcontant1'>
              <i className="fa-solid fa-cube icon1"></i>
              <h2 className='subcontant-h2'>Web Development</h2>
              <p className='subcontant-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias placeat doloremque sed, distinctio nesciunt porro officia quas rem eveniet, vel vitae non dolor error excepturi dolores possimus corporis facere.</p>
            </div>
            <div className='col-md-4 Subcontant1'>
              <i className="fa-solid fa-computer-mouse icon1 "></i>
              <h2 className='subcontant-h2'>Marketing & Reporting</h2>
              <p className='subcontant-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias placeat doloremque sed, distinctio nesciunt porro officia quas rem eveniet, vel vitae non dolor error excepturi dolores possimus corporis facere.</p>
            </div>
          </div>
        </div>
      </section>
     <About/>
     <Service/>
     <Work />
      {/* <Fact/> */}
     <Contact/>
     
    </>
  )
}
