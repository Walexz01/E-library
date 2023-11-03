import React from "react";
import { ImCheckmark } from "react-icons/im";
interface Props {
  title: string;
  price: string;
  tag?: string;
  lists: string[];
}
const PriceCard = ({ lists, price, tag, title }: Props) => {
  return (
    <div className="price card">
      <div className="top">
        {tag ? (
          <div className="tag">
            <span>{tag}</span>
          </div>
        ) : (
          <div className="not_tag"></div>
        )}
        <div className="shade"></div>
        <div className="price_name">
          <h3>{price}</h3>
          <span>{title}</span>
        </div>
        <div className="list_why">
          <ul>
            {lists.map((list, index) => (
              <li key={index}>
                <ImCheckmark /> {list}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="sub_btn">
          <button className="subcribe_btn">Subscribe and safe</button>
          <p className="desc">Cancel anytime!</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
