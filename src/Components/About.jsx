import React from 'react'
import Navbar from './Navbar.jsx'
export default function About() {
  return (
    <><Navbar />
    <div className="container">About</div>
  
    <div
      id="cardCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">

        {/* SLIDE 1 */}
        <div className="carousel-item active">
          <div className="container">
            <div className="row g-4">

              <div className="col-lg-4 col-md-6">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <h5>Project One</h5>
                    <p>Website & UI Design</p>
                  </div>
                  <img
                    src="https://via.placeholder.com/400x300"
                    className="card-img-bottom"
                    alt="Project One"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-none d-md-block">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <h5>Project Two</h5>
                    <p>Branding & Identity</p>
                  </div>
                  <img
                    src="https://via.placeholder.com/400x300"
                    className="card-img-bottom"
                    alt="Project Two"
                  />
                </div>
              </div>

              <div className="col-lg-4 d-none d-lg-block">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <h5>Project Three</h5>
                    <p>Marketing Campaign</p>
                  </div>
                  <img
                    src="https://via.placeholder.com/400x300"
                    className="card-img-bottom"
                    alt="Project Three"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="carousel-item">
          <div className="container">
            <div className="row g-4">

              <div className="col-lg-4 col-md-6">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <h5>Project Four</h5>
                    <p>Landing Page</p>
                  </div>
                  <img
                    src="https://via.placeholder.com/400x300"
                    className="card-img-bottom"
                    alt="Project Four"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-none d-md-block">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <h5>Project Five</h5>
                    <p>Mobile UI</p>
                  </div>
                  <img
                    src="https://via.placeholder.com/400x300"
                    className="card-img-bottom"
                    alt="Project Five"
                  />
                </div>
              </div>

              <div className="col-lg-4 d-none d-lg-block">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <h5>Project Six</h5>
                    <p>SEO & Ads</p>
                  </div>
                  <img
                    src="https://via.placeholder.com/400x300"
                    className="card-img-bottom"
                    alt="Project Six"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* CONTROLS */}
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
 <section className="workCarousel">
  <div className="container">
    <h2 className="text-center mb-4">Our Works</h2>

    <div
      id="workCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">

        {/* SLIDE 1 */}
        <div className="carousel-item active">
          <div className="row g-4">

            {[
              {
                img: "https://images.pexels.com/photos/5082577/pexels-photo-5082577.jpeg",
                title: "UI / UX Design"
              },
              {
                img: "https://tse4.mm.bing.net/th/id/OIP.jZP8enDDRCcDzJ2PkXmYRwHaE8",
                title: "Web Development"
              },
              {
                img: "https://tse3.mm.bing.net/th/id/OIP.tnofF-nSm97FzMJ6XFL9UwHaF7",
                title: "Branding"
              },
              {
                img: "https://www.assurich.com/3385-superlarge_default/digital-marketing.jpg",
                title: "Digital Marketing"
              }
            ].map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="card work-card">
                  <img src={item.img} className="card-img-top" />
                  <div className="card-body text-center">
                    <h5>{item.title}</h5>
                    <button className="btn btn-outline-dark btn-sm mt-2">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="carousel-item">
          <div className="row g-4">

            {[
              {
                img: "https://images.pexels.com/photos/5083405/pexels-photo-5083405.jpeg",
                title: "Mobile Apps"
              },
              {
                img: "https://colorlib.com/wp/wp-content/uploads/sites/2/tyche-free-website-template.jpg",
                title: "E-Commerce"
              },
              {
                img: "https://uicookies.com/wp-content/uploads/2020/04/Gravity.jpg",
                title: "Landing Pages"
              },
              {
                img: "https://tse3.mm.bing.net/th/id/OIP.eIJCblz6cdESEczqGaTtNgHaF_",
                title: "SEO Optimization"
              }
            ].map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="card work-card">
                  <img src={item.img} className="card-img-top" />
                  <div className="card-body text-center">
                    <h5>{item.title}</h5>
                    <button className="btn btn-outline-dark btn-sm mt-2">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* CONTROLS */}
      <button className="carousel-control-prev" type="button" data-bs-target="#workCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#workCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>
</section>
<section className="workCarousel">
  <div className="container">
    <h2 className="text-center mb-4">Our Works</h2>

    <div
      id="workCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">

        {/* SLIDE 1 */}
        <div className="carousel-item active">
          <div className="row g-4">

            {[
              {
                img: "https://images.pexels.com/photos/5082577/pexels-photo-5082577.jpeg",
                title: "UI / UX Design"
              },
              {
                img: "https://tse4.mm.bing.net/th/id/OIP.jZP8enDDRCcDzJ2PkXmYRwHaE8",
                title: "Web Development"
              },
              {
                img: "https://tse3.mm.bing.net/th/id/OIP.tnofF-nSm97FzMJ6XFL9UwHaF7",
                title: "Branding"
              },
              {
                img: "https://www.assurich.com/3385-superlarge_default/digital-marketing.jpg",
                title: "Digital Marketing"
              }
            ].map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div
                  className="work-card-bg"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className="work-overlay">
                    <h5>{item.title}</h5>
                    <button className="btn btn-light btn-sm">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="carousel-item">
          <div className="row g-4">

            {[
              {
                img: "https://images.pexels.com/photos/5083405/pexels-photo-5083405.jpeg",
                title: "Mobile Apps"
              },
              {
                img: "https://colorlib.com/wp/wp-content/uploads/sites/2/tyche-free-website-template.jpg",
                title: "E-Commerce"
              },
              {
                img: "https://uicookies.com/wp-content/uploads/2020/04/Gravity.jpg",
                title: "Landing Pages"
              },
              {
                img: "https://tse3.mm.bing.net/th/id/OIP.eIJCblz6cdESEczqGaTtNgHaF_",
                title: "SEO Optimization"
              }
            ].map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div
                  className="work-card-bg"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className="work-overlay">
                    <h5>{item.title}</h5>
                    <button className="btn btn-light btn-sm">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* CONTROLS */}
      <button className="carousel-control-prev" type="button" data-bs-target="#workCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#workCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>
</section>


   
</>
    
  )
}
