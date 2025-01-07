/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MenuItem.css";

const MenuItem = ({ text, list }) => {
  return (
    <div className="menu__section container__wrapper">
      <div className="menu__section-box container">
        <div className="menu__section-heading">{text}</div>
        <ul className="menu__section-list">
          {list.map((item, index) => (
            <li key={index} className="menu__section-item">
              <a href="#" className="menu__item-link">
                <div className="menu__item-img">
                  <img src={item.imgUrl} alt="Ảnh" />
                </div>
                <div className="menu__item-title">
                  {item.title ? item.title : ""}
                </div>
                <div className="menu__item-price">
                  <span>Từ</span>
                  {item.price}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuItem;
