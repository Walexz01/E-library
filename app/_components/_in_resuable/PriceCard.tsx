import React from "react";

const PriceCard = () => {
  return (
    <div className="price card">
      <div className="tag">
        <span>Popular</span>
      </div>
      <div className="shade"></div>
      <div className="price_name">
        <h3>$29/m</h3>
        <span>BASIC</span>
      </div>
      <div className="list_btn">
        <ul>
          <li>Lorem ipsum dolor sit, amet </li>
          <li>Lorem ipsum dolor sit, amet </li>
          <li>Lorem ipsum dolor sit, amet </li>
          <li>Lorem ipsum dolor sit, amet </li>
          <li>Lorem ipsum dolor sit, amet </li>
        </ul>
        <div className="sub_btn">
          <button className="subcribe_btn">Subscribe and safe</button>
          <p className="desc">Cancel anytime!</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
