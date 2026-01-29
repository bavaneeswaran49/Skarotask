import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Fackapi() {
  const [api, setApi] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((rdata) => {
        setApi(rdata.products);
        console.log(rdata);
      });
  }, []);
  return (
    <div className="container">
      <div>
          <h1 className="kproduct">Cosmetics</h1>
        </div>
      <div className="row">
        {api.slice(0, visibleCount).map((item) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
            <Link to={`/product/${item.id}`} className="link-card">
              <div className="kartt p-2">
                <div className="decration">
                  <h5 className="discc par-p">{item.title.slice(0, 25)}...</h5>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="tamil"
                  />
                  <p className="dis par-p">
                    {item.description.slice(0, 60)}...
                  </p>
                  <p className="par-p">
                    <strong>Category: </strong>
                    {item.category}
                  </p>
                  <p className="par-p">
                    <strong>Price: </strong>${item.price}
                  </p>
                </div>
              </div>
            </Link>

          </div>
        ))}
      </div>
      {visibleCount < api.length && (
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

  );
}