import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar1 from './Navbar1';
import Fackapi from "./Fackapi";
import Contact from "./Contact";
export default function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  // const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);

  if (!product) return <h3 className="text-center mt-5">Loading...</h3>;




  return (
    <>
      <Navbar1 />

      <div className="container py-5 pharmas">

        <div className="row">
          <div className="sward col-lg-5 ">
            <h2 className="pharmass">{product.title}</h2>
            <div className="img-phar">
              <img src={product.thumbnail} alt={product.title} className="" />
            </div>
          </div>
          <div className="sward1 col-lg-7">
            <p><strong>{product.description}</strong></p>
            <p><strong>Brand : </strong>{product.brand}</p>
            <p><strong>Category : </strong> {product.category}</p>
            <p><strong>Price : </strong> ${product.price}</p>
            <p><strong>Discount Percentage : </strong>{product.discountPercentage}%</p>
            <p><strong>Rating :</strong> {product.rating}</p>
            <p><strong>Stock :</strong> {product.stock}</p>
            <div className="mt-3">
              <div className="buttons">
                <button className="btn" >
                  <span></span>
                  <p
                    data-start="good luck!"
                    data-text=" ❤️! "
                    data-title="Add to Cart"
                  ></p>
                </button>
              </div>
            </div>

          </div>
        </div></div>
      <Fackapi />
      <Contact />
    </>
  );
}
