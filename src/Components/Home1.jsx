import React, { useState, useEffect } from "react";
import "../App.css";
import About from "./About";
import Navbar1 from "./Navbar1";
import Service from "./Service";
import Work from "./Work";
import Contact from "./Contact";
import Fact from "./Fact";

export default function Home1() {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    fetch('carosilimg.json')
      .then(response => response.json())
      .then(json => setProducts(json))
  }, []);

  return (
    <>
      <Navbar1 />
      <section className="homeSection" id="home">
        <div className="home-content container">
          <h1 className="homeContent">
            A DIGITAL
            <br />
            AGENCY.
          </h1>
        </div>
        <div className="home-sub1 container">
          <div className="row">
            <div className="col-md-4 Subcontant1">
              <i className="fa-regular fa-calendar icon1"></i>
              <h2 className="subcontant-h2">Business Strategy</h2>
              <p className="subcontant-p">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ut consequatur ratione id at illum quod architecto velit ullam nulla nam, consequuntur expedita iste maxime tenetur rem perspiciatis facilis nesciunt!
              </p>
            </div>
            <div className="col-md-4 Subcontant1">
              <i className="fa-solid fa-cube icon1"></i>
              <h2 className="subcontant-h2">Web Development</h2>
              <p className="subcontant-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quibusdam? Velit eius maxime blanditiis, autem, molestiae, natus doloribus veritatis alias nisi totam atque accusamus sed officiis optio id numquam voluptas.
              </p>
            </div>
            <div className="col-md-4 Subcontant1">
              <i className="fa-solid fa-computer-mouse icon1"></i>
              <h2 className="subcontant-h2">Marketing & Reporting</h2>
              <p className="subcontant-p">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, sunt nobis sapiente exercitationem eveniet pariatur eligendi odio at. Quia doloremque commodi facere vitae assumenda quidem ipsam iste esse blanditiis voluptate.
              </p>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Service />
      <Work />
      <Fact />
      <div id="potfolio">
        <div className=" container my-5">
          <h2 className="mb-4">Projects</h2>
          <div className="row">
            {products.slice(0, visibleCount).map((items) => (
              <div key={items.id} className="col-lg-3 col-md-4 col-sm-6">
                <div className="p-3 my-2 kart">
                  <h4 className="oone">{items.title}</h4>

                  <div className="dlass">
                    <img
                      src={items.image}
                      alt={items.title}
                      className="dlasss"
                      loading="lazy"
                    />
                  </div>
                  <p className="ppp">Price ${items.price}</p>
                  <p className="pp">
                    Rating : {items.rating.rate}
                    <i className="fa-solid fa-star star"></i>
                  </p>
                  <p>No of Users : {items.rating.count}</p>
                  <div className="div">
                    <a className="anchor" href={items.button}><button className="btn-load">View Demo</button></a>
                    <button className="btn-load">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {visibleCount < products.length && (
            <div className="text-center my-4">
              <button className="btn-load" onClick={() => setVisibleCount(visibleCount + 4)}>Load More</button>
            </div>
          )}
        </div></div>
      <Contact />
    </>
  );
}
