import React from 'react'
import Navbar from './Navbar.jsx'
export default function Service() {
  return (
    <>
      <div id='service' className='serve'>
        <section className='servicesSection' >
          <div className='services-content container '>
            <div className='row '>
              <div className='col-md-4'>
                <h1 className='servicesContent '>Services</h1>
                <p className='services-p1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique rem, nam excepturi atque repellat quidem</p>
                <h4 className='services-h4 my-5 py-3'>Lets begin the Journy</h4>
              </div>
              <div className='col-md-4'>
                <div className='service-icon1'>
                  <i class="fa-solid fa-computer icon"></i></div>
                <h4 className='services-h2'>Web Development</h4>
                <p className='services-p2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quam repudiandae inventore? Quod eveniet accusamus vel, a quia quidem aspernatur explicabo ex ducimus! Labore excepturi incidunt recusandae, porro rem quaerat!</p>

                <div className='service-icon1'>
                  <i class="fa-solid fa-people-line icon"></i></div>
                <h4 className='services-h2'>Flutter</h4>
                <p className='services-p2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quam repudiandae inventore? Quod eveniet accusamus vel, a quia quidem aspernatur explicabo ex ducimus! Labore excepturi incidunt recusandae, porro rem quaerat!</p>
              </div>
              <div className='col-md-4'>
                <div className='service-icon1'>
                  <i class="fa-solid fa-chart-line icon"></i></div>
                <h4 className='services-h2'>Digital Marketing</h4>
                <p className='services-p2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quam repudiandae inventore? Quod eveniet accusamus vel, a quia quidem aspernatur explicabo ex ducimus! Labore excepturi incidunt recusandae, porro rem quaerat!</p>

                <div className='service-icon1'>
                  <i class="fa-solid fa-mobile-screen icon"></i>
                </div>
                <h4 className='services-h2'>Mobile App Development</h4>
                <p className='services-p2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quam repudiandae inventore? Quod eveniet accusamus vel, a quia quidem aspernatur explicabo ex ducimus! Labore excepturi incidunt recusandae, porro rem quaerat!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>

  )
}
