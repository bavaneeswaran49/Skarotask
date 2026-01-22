export default function Work() {
  return (
    <>
    <section className='workContent' id='work'>
        <div className='work-content container'>
          <div>
            <h1 className='workContent-h1 d-flex'>Our Works</h1></div>
          <p className='workContent-p'>At Try Do Digital Agency, we transform ideas into impactful digital solutions.From branding and UI/UX design to full-stack development and digital marketing,
            our work is focused on creativity, performance, and real business outcomes.</p>
        </div>
        <div
          id="cardCarousel"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="">
                <div className="row g-4">
                  <div className="col-lg-2 col-md-6">
                    <div className="card ">
                      <img src="https://images.pexels.com/photos/5082577/pexels-photo-5082577.jpeg" className="card-img-top" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 d-none d-md-block">
                    <div className="card ">
                      <img src="https://tse4.mm.bing.net/th/id/OIP.jZP8enDDRCcDzJ2PkXmYRwHaE8?pid=Api&P=0&h=180" className="card-img-top" />
                    </div>
                  </div>
                  <div className="col-lg-2 d-none d-lg-block">
                    <div className="card ">
                      <img src="https://tse3.mm.bing.net/th/id/OIP.tnofF-nSm97FzMJ6XFL9UwHaF7?pid=Api&P=0&h=180" className="card-img-top" />
                    </div>
                  </div>
                  <div className="col-lg-2 d-none d-lg-block">
                    <div className="card ">
                      <img src="https://www.assurich.com/3385-superlarge_default/digital-marketing.jpg" className="card-img-top" />
                    </div>
                  </div>
                  <div className="col-lg-2 d-none d-lg-block">
                    <div className="card ">
                      <img src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg" className="card-img-top" />
                    </div>
                  </div>
                  <div className="col-lg-2 d-none d-lg-block">
                    <div className="card ">
                      <img src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg" className="card-img-top" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="">
                <div className="row g-4">
                  <div className="col-lg-2 col-md-6">
                    <div className="card ">
                      <img src="https://images.pexels.com/photos/5083405/pexels-photo-5083405.jpeg" className="card-img-top" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 d-none d-md-block">
                    <div className="card ">
                      <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/tyche-free-website-template.jpg" className="card-img-top" />
                    </div>
                  </div>
                  <div className="col-lg-2 d-none d-lg-block">
                    <div className="card ">
                      <img src="https://uicookies.com/wp-content/uploads/2020/04/Gravity.jpg" className="card-img-top" />
                    </div>
                  </div>
                  <div className="col-lg-2 d-none d-lg-block">
                    <div className="card ">
                      <img src="https://images.pexels.com/photos/3585011/pexels-photo-3585011.jpeg" className="card-img-top" />
                    </div>
                  </div>
                  <div className="col-lg-2 d-none d-lg-block">
                    <div className="card ">
                      <img src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg" className="card-img-top" />
                    </div>
                  </div>
                  <div className="col-lg-2 d-none d-lg-block">
                    <div className="card ">
                      <img src="https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg" className="card-img-top" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='carousal-btns'>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#cardCarousel"
              data-bs-slide="prev">
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#cardCarousel"
              data-bs-slide="next">
              <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </section></>
  )
}
