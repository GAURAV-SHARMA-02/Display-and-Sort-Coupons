import React from "react";
import "./App.css";

function Card({ brand }) {
  return (
    <div class="card text-center fcard">
      <div class="card-body">
        <img
          className="fcard-2"
          alt={brand.name}
          src={process.env.PUBLIC_URL + brand.imgpath}
        />
      </div>
      <div class="card-footer">
        <strong className="h5">{brand.text}</strong> <br /> <div className="txt">Lorem Ipsum dummy
        text</div>
      </div>
    </div>
  );
}

export default Card;
 