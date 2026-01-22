import React from 'react'
import Navbar from './Navbar.jsx'
export default function Contact() {
  return (
   <>
    <div className='footerSpacer' id='footerSpacer'>
        <div className='mainfooter1'>
          <div className='mainfooter'>
            <section className='FooterSection'>
              <div className='footer-content'>
                <div className=' footer-contant1'>
                  <p>Ready To  Do This</p>
                  <h1 className='footer-contant1-h2'>Let's get<br></br> to work</h1>
                  <button className="btn btn-outline-light" type="submit">
                    Contact Us
                  </button>
                </div>
              </div>
            </section>
            <div className='footerSection2'>
              <div className='footer2-content container'>
                <div className='row1'>
                  <div className=' footer2-content1 col-lg-3'>
                    <h4 className='text-white f-h4'>Say Hello  </h4>
                    <p className='text-white'>+(91) 8248386613</p>
                    <p className='text-white'>info@example.com</p>
                    <p className='text-white f-p'>Tirupur</p>
                  </div>
                  <div className=' footer2-content1 '>
                    <h4 className='text-white f-h4'>Quick Links</h4>
                    <p className='text-white'>Home</p>
                    <p className='text-white'>About</p>
                    <p className='text-white '>Services</p>
                    <div className='footer2-content1 f-p d-flex gap-3'>
                      <i class="fa-brands fa-linkedin-in ficon "></i>
                      <i class="fa-brands fa-facebook-f ficon"></i>
                      <i class="fa-brands fa-twitter ficon"></i>
                      <i class="fa-brands fa-instagram ficon"></i>
                    </div>
                  </div>
                </div>
                <div className='row2 d-flex justify-content-center align-items-center'>
                  <p className='footer2-content-p text-white mx-5 '>© 2024 Try Do Digital Agency. All rights reserved.</p>
                  <div className='arr md-block md-d-none'>
                    <a href='#home'>
                      <i class="fa-solid fa-angle-up farr"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </> 
  )
}
