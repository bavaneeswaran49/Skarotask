import React from 'react'
import '../App.css'
import Navbar from './Navbar'
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
              <i class="fa-regular fa-calendar icon1"></i>
              <h2 className='subcontant-h2'>Business Strategy</h2>
              <p className='subcontant-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias placeat doloremque sed, distinctio nesciunt porro officia quas rem eveniet, vel vitae non dolor error excepturi dolores possimus corporis facere.</p>
            </div>
            <div className='col-md-4 Subcontant1'>
              <i class="fa-solid fa-cube icon1"></i>
              <h2 className='subcontant-h2'>Web Development</h2>
              <p className='subcontant-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias placeat doloremque sed, distinctio nesciunt porro officia quas rem eveniet, vel vitae non dolor error excepturi dolores possimus corporis facere.</p>
            </div>
            <div className='col-md-4 Subcontant1'>
              <i class="fa-solid fa-computer-mouse icon1 "></i>
              <h2 className='subcontant-h2'>Marketing & Reporting</h2>
              <p className='subcontant-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias placeat doloremque sed, distinctio nesciunt porro officia quas rem eveniet, vel vitae non dolor error excepturi dolores possimus corporis facere.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='aboutSection'>
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
                <div className='abt-cnt-2div d-flex '>
                  <div className='abt-cnt-2div1 me-5'>
                    <h2 className='abt-cnt-2div1-h2'>Who we are ?</h2>
                    <p className='abt-cnt-2div1-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati et labore eaque ad illum, velit tenetur, possimus veritatis deleniti dolorum officia soluta? Pariatur dicta, reiciendis optio illo amet quisquam voluptate!</p>
                  </div>
                  <div className='abt-cnt-2div2'>
                    <h2 className='abt-cnt-2div2-h2'>We are known for ?</h2>
                    <p className='abt-cnt-2div2-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea culpa corporis inventore debitis veritatis esse eius iste natus sint vitae beatae et hic consequatur est eos recusandae minus, labore tenetur?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='servicesSection'>
        <div className='services-content container '>
          <div className='row '>
            <div className='col-md-3'>
              <h1 className='servicesContent '>Services</h1>
              <p className='services-p1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique rem, nam excepturi atque repellat quidem</p>
              <h4 className='services-h4 my-5 py-3'>Lets begin the Journy</h4>
            </div>
            <div className='col-md-4'>
              <div className='service-icon1'>
                <i class="fa-solid fa-computer icon"></i></div>
              <h4 className='services-h2'>Web Development</h4>
              <p className='services-p2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quam repudiandae inventore? Quod eveniet accusamus vel, a quia quidem aspernatur explicabo ex ducimus! Labore excepturi incidunt recusandae, porro rem quaerat!</p>
              <br></br>
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
             <br></br>
              <div className='service-icon1'>
                <i class="fa-solid fa-mobile-screen icon"></i>
              </div>
              <h4 className='services-h2'>Mobile App Development</h4>
              <p className='services-p2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quam repudiandae inventore? Quod eveniet accusamus vel, a quia quidem aspernatur explicabo ex ducimus! Labore excepturi incidunt recusandae, porro rem quaerat!</p>
            </div>
          </div>
        </div>
      </section>
      <section className='workContent'>
        <div className='work-content container'>
          <h1 className='workContent-h1'>Our Works</h1>
          <p className='workContent-p'>At Try Do Digital Agency, we transform ideas into impactful digital solutions.From branding and UI/UX design to full-stack development and digital marketing,
            our work is focused on creativity, performance, and real business outcomes.</p>
        </div>
        <div
          id="cardCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row g-4">
                  <div className="col-lg-3 col-md-6">
                    <div className="card ">
                      <img src="https://images.pexels.com/photos/5082577/pexels-photo-5082577.jpeg" className="card-img-top" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 d-none d-md-block">
                    <div className="card ">
                      <img src="https://tse4.mm.bing.net/th/id/OIP.jZP8enDDRCcDzJ2PkXmYRwHaE8?pid=Api&P=0&h=180" className="card-img-top" />
                    </div>
                  </div>
                  <div className="col-lg-3 d-none d-lg-block">
                    <div className="card ">
                      <img src="https://tse3.mm.bing.net/th/id/OIP.tnofF-nSm97FzMJ6XFL9UwHaF7?pid=Api&P=0&h=180" className="card-img-top" />
                    </div>
                  </div>
                  <div className="col-lg-3 d-none d-lg-block">
                    <div className="card ">
                      <img src="https://www.assurich.com/3385-superlarge_default/digital-marketing.jpg" className="card-img-top" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row g-4">
                  <div className="col-lg-3 col-md-6">
                    <div className="card ">
                      <img src="https://images.pexels.com/photos/5083405/pexels-photo-5083405.jpeg" className="card-img-top" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 d-none d-md-block">
                    <div className="card ">
                      <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/tyche-free-website-template.jpg" className="card-img-top" />
                    </div>
                  </div>
                  <div className="col-lg-3 d-none d-lg-block">
                    <div className="card ">
                      <img src="https://uicookies.com/wp-content/uploads/2020/04/Gravity.jpg" className="card-img-top" />
                    </div>
                  </div>
                  <div className="col-lg-3 d-none d-lg-block">
                    <div className="card ">
                      <img src="https://tse3.mm.bing.net/th/id/OIP.eIJCblz6cdESEczqGaTtNgHaF_?pid=Api&P=0&h=180" className="card-img-top" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#cardCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#cardCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>
      <section className='factSection'>
        <div className='fact-content '>
          <h1 className='factContent-h1'>Fun Facts</h1>
        </div>
        <div className='fact-subcontent container'>
          <div className='row fact-row'>
            <div className='col-md-4 fact-subcontant1 d-flex justify-content-center align-items-center'>
              <div className=''>
                <h2 className='fact-subcontant-h2 d-flex justify-content-center align-items-center num'>199+</h2>
                <p className=' d-flex justify-content-center align-items-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p className=' d-flex justify-content-center align-items-center'>A nulla voluptates nemo praesentium error.</p>
              </div>
            </div>
            <div className='col-md-4 fact-subcontant1 d-flex justify-content-center align-items-center'>
              <div className=''>
                <h2 className='fact-subcontant-h2 d-flex justify-content-center align-items-center num  '>500+</h2>
                <p className=' d-flex justify-content-center align-items-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p className=' d-flex justify-content-center align-items-center'>A nulla voluptates nemo praesentium error.</p>

              </div>
            </div>
            <div className='col-md-4 fact-subcontant1 d-flex justify-content-center align-items-center'>
              <div className=''>
                <h2 className='fact-subcontant-h2 d-flex justify-content-center align-items-center num'>900+</h2>
                <p className=' d-flex justify-content-center align-items-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p className=' d-flex justify-content-center align-items-center'>A nulla voluptates nemo praesentium error.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='BlogSection'>
        <div className='blog-content container'>
          <div className='blog-head'>
            <h3 className='blogContent-h1 d-flex justify-content-center text-align-center'>Lorem ipsum dolor sit amet consectetur adipisicing </h3>
            <h3 className='blogContent-h1 d-flex justify-content-center text-align-center'> cupiditate necessitatibus a hic saepe hic saepe</h3>
            <h3 className='blogContent-h1 d-flex justify-content-center text-align-center'> cupiditate necessitatibus a  quae </h3>
          </div>
          <div className='blog-subcontent d-flex justify-content-center align-items-center gap-4'>
            <img src="https://tse2.mm.bing.net/th/id/OIP.-DNVPrL2Y3Jfffk-OQH6AgHaJQ?pid=Api&P=0&h=180" alt="blog-img" className='blog-img' />
            <img src="https://tse3.mm.bing.net/th/id/OIP.Lcf-cTifGu9WjEjr7CiCOwHaJ2?pid=Api&P=0&h=180" alt="blog-img" className='blog-img' />
            <img src="https://tse1.mm.bing.net/th/id/OIP.AJ_66SVb26WjsEBYZ_wSjwHaLH?pid=Api&P=0&h=180" alt="blog-img" className='blog-img' />
            <img src="https://tse2.mm.bing.net/th/id/OIP.-DNVPrL2Y3Jfffk-OQH6AgHaJQ?pid=Api&P=0&h=180" alt="blog-img" className='blog-img' />
            <img src="https://tse3.mm.bing.net/th/id/OIP.Lcf-cTifGu9WjEjr7CiCOwHaJ2?pid=Api&P=0&h=180" alt="blog-img" className='blog-img' />
          </div>
          <div className='blog-subcontent d-flex justify-content-center align-items-center gap-4 my-5'>
            <img src="https://tse2.mm.bing.net/th/id/OIP.-DNVPrL2Y3Jfffk-OQH6AgHaJQ?pid=Api&P=0&h=180" alt="blog-img" className='blog-img' />
            <img src="https://tse3.mm.bing.net/th/id/OIP.Lcf-cTifGu9WjEjr7CiCOwHaJ2?pid=Api&P=0&h=180" alt="blog-img" className='blog-img' />
            <img src="https://tse1.mm.bing.net/th/id/OIP.AJ_66SVb26WjsEBYZ_wSjwHaLH?pid=Api&P=0&h=180" alt="blog-img" className='blog-img' />
            <img src="https://tse2.mm.bing.net/th/id/OIP.-DNVPrL2Y3Jfffk-OQH6AgHaJQ?pid=Api&P=0&h=180" alt="blog-img" className='blog-img' />
          </div>
        </div>
      </section>
      <section className='newsSection'>
        <div className='news-content container'>
          <h2 className='newsContent-h1'>Latest News</h2>
          <p className='newsContent-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Natus molestias placeat doloremque sed<br></br>distinctio nesciunt porro officia quas rem eveniet.</p>
          <div className=' line d-flex justify-content-end text-align-end px-5'><p className='line1'>Explore more</p></div>
        </div>
        <div className='news-subcontent container '>
          <div className='d-flex news-subcontant-row'>
            <div className=' news-subcontant1'>
              <h6 className='news-subcontant-h4'>Lorem conversation</h6>
              <h5 className='news-subcontant-p'>Lorem ipsum dolor sit amet.</h5>
            </div>
            <div className='news-subcontant2'>
              <h6 className='news-subcontant-h4'>Lorem Dark</h6>
              <h5 className='news-subcontant-p'>Lorem ipsum dolor sit amet.</h5>
            </div>
            <div className='news-subcontant3'>
              <h6 className='news-subcontant-h4'>Lorem Aside</h6>
              <h5 className='news-subcontant-p'>Lorem ipsum dolor sit amet.</h5>
            </div>
          </div>
        </div>
        <div className='logo-news container'>
          <img src='https://s.yimg.com/zb/imgv1/27f9412c-0cc2-3ce8-8c6c-a854efc9cf99/t_500x300' alt='logo-img' className='newslogo-img' />
          <img src='https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/ex-logo/exl-08-media-cinema.jpg?imwidth=1440' alt='logo-img' className='newslogo-img' />
          <img src='https://s.yimg.com/zb/imgv1/5f784889-bfec-3332-a0a8-3ce21c8a0538/t_500x300' alt='logo-img' className='newslogo-img' />
          <img src='https://images.seeklogo.com/logo-png/40/2/udemy-wordmark-logo-png_seeklogo-409220.png' alt='logo-img' className='newslogo-img udmy' />
          <img src='https://s.yimg.com/zb/imgv1/18d25184-5ca8-33d3-8593-94274d4f22c1/t_500x300' alt='logo-img' className='newslogo-img' />
        </div>
        <div className='logo1-news container'>
          <img src='https://s.yimg.com/zb/imgv1/27f9412c-0cc2-3ce8-8c6c-a854efc9cf99/t_500x300' alt='logo-img' className='newslogo-img' />
          <img src='https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/ex-logo/exl-08-media-cinema.jpg?imwidth=1440' alt='logo-img' className='newslogo-img' />
          <img src='https://s.yimg.com/zb/imgv1/5f784889-bfec-3332-a0a8-3ce21c8a0538/t_500x300' alt='logo-img' className='newslogo-img' />
          <img src='https://images.seeklogo.com/logo-png/40/2/udemy-wordmark-logo-png_seeklogo-409220.png' alt='logo-img' className='newslogo-img udmy' />
        </div>
      </section>
      <div className='footerSpacer'>
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
              {/* </div> */}
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
        </div></div>
    </>
  )
}
