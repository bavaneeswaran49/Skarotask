import React, { useState, useEffect } from "react";
import "../App.css";
import About from "./About";
import Navbar1 from "./Navbar1";
import Service from "./Service";
import Work from "./Work";
import Contact from "./Contact";
import Fact from "./Fact";
import Fackapi from "./Fackapi";

export default function Home1() {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [search, setSearch] = useState("");
  // const [api, setApi] = useState([]);

  useEffect(() => {
    fetch("carosilimg.json")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.price.toString().includes(search)
  );

  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //     .then(res => res.json())
  //     .then((rdata) => {
  //       setApi(rdata.products);
  //       console.log(rdata);
  //     });
  // }, [])

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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptatum, vitae ad possimus esse libero exercitationem deserunt hic inventore eos ipsum in ratione unde sequi aperiam dolorum nisi, placeat eaque!              </p>
            </div>

            <div className="col-md-4 Subcontant1">
              <i className="fa-solid fa-cube icon1"></i>
              <h2 className="subcontant-h2">Web Development</h2>
              <p className="subcontant-p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptatum, vitae ad possimus esse libero exercitationem deserunt hic inventore eos ipsum in ratione unde sequi aperiam dolorum nisi, placeat eaque!
              </p>
            </div>

            <div className="col-md-4 Subcontant1">
              <i className="fa-solid fa-computer-mouse icon1"></i>
              <h2 className="subcontant-h2">Marketing & Reporting</h2>
              <p className="subcontant-p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et voluptatum, vitae ad possimus esse libero exercitationem deserunt hic inventore eos ipsum in ratione unde sequi aperiam dolorum nisi, placeat eaque!              </p>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Service />
      <Work />
      <Fact />
      <div id="potfolio">
        <div className="py-5">
          <div className="container ">
            <div className="potfolio1 d-flex justify-content-between align-items-center  ">
              <h2 className="pot">Portfolio</h2>
              <div className="inp">
                <input
                  type="text"
                  placeholder="get your own Web"
                  className="form-control w-25"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setVisibleCount(20);
                  }}
                /><i className="fa-solid fa-magnifying-glass sear"></i>
              </div>
            </div>
            <div className="row">
              {filteredProducts
                .slice(0, visibleCount)
                .map((items) => (
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
                        <a className="anchor" href={items.button}>
                          <button className="btn-load">View Demo</button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {visibleCount < filteredProducts.length && (
            <div className="text-center my-4">
              <button
                className="btn-load"
                onClick={() => setVisibleCount(visibleCount + 4)}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>  <Fackapi/>
      <Contact />
    
    </>
  );
}