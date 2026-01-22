import React from 'react'
import Navbar from './Navbar.jsx'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function About() {
  
  return (
    <> <section className='aboutSection' id='about'>
        <div className='about-content container'>
          <div className='row'>
            <div className='col-md-5 aboutContant1 d-flex justify-content-center align-items-center'>
              <img src='https://images.pexels.com/photos/5717632/pexels-photo-5717632.jpeg' alt="about-img" className='about-img rounded' />
            </div>
            <div className='col-md-7 aboutContant2'>
              <div className='abtcont'>
                <div className='about-contentmain'>
                  <h1 className='aboutContent '>ABOUT</h1>
                  <p className='about-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias placeat doloremque sed, distinctio nesciunt porro officia quas rem eveniet, vel vitae non dolor error excepturi dolores possimus corporis facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias placeat doloremque sed, distinctio nesciunt porro officia quas rem eveniet, vel vitae non dolor error excepturi dolores possimus corporis facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias placeat doloremque sed, distinctio nesciunt porro officia quas rem eveniet, vel vitae non dolor error excepturi dolores possimus corporis facere.</p>
                </div>
                <div className='abt-cnt-2div '>
                  <div className='abt-cnt-2div1 '>
                    <h2 className='abt-cnt-2div1-h2'>Who we are ?</h2>
                    <p className='abt-cnt-2div1-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati et labore eaque ad illum, velit tenetur, possimus veritatis deleniti dolorum officia soluta? Pariatur dicta, reiciendis optio illo amet quisquam voluptate!</p>
                  </div>
                  <div className='abt-cnt-2div2'>
                    <h2 className='abt-cnt-2div2-h2'>We are known ?</h2>
                    <p className='abt-cnt-2div2-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea culpa corporis inventore debitis veritatis esse eius iste natus sint vitae beatae et hic consequatur est eos recusandae minus, labore tenetur?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</>
    
  )
}
