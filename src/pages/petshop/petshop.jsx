import React from "react";

import Header from "../../components/header";
import ProductCard from "../../components/product/card/ProductCard";
import "./style.css";

function Petshop() {
  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src="https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png"
              className="img-fluid petshop-image"
            />
            <b>Petlove</b>
            <div className="petshop-infos">
              <span className="mdi mdi-star"></span>
              <text>
                <b>2,8</b>
              </text>
              <span className="mdi mdi-cash"></span>
              <text>$$$</text>
              <span className="mdi mdi-map-marker"></span>
              <text>2,9KM</text>
            </div>
            <label className="badge badge-primary">Frete Grátis</label>
          </div>
          <div className="col-10">
            <h5>Produtos</h5>
            <br />
            <div className="row">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
                <ProductCard />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Petshop;
