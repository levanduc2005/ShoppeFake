/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Navbar.css";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoNotificationsOutline, IoChevronDownOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";

const Navbar = ({ nav }) => {
  const language = ["Tiếng Việt", "English"];
  const [primaryLanguage, setPrimaryLanguage] = useState("Tiếng Việt");

  const changeLanguage = (lang) => {
    setPrimaryLanguage(lang);
  };

  return (
    <div
      className={
        nav
          ? "navbar__wrapper container__wrapper navbar__cart"
          : "navbar__wrapper container__wrapper"
      }
    >
      <nav className="navbar container ">
        <ul className="navbar__list flex__center">
          <li className="navbar__item">Kênh Người Bán</li>
          <li className="navbar__item navbar__wall">
            Trở Thành Người Bán Shoppe
          </li>
          <li className="qr-code__wrapper navbar__wall">
            <div className="navbar__item">
              <a href="/web/">Tải Ứng Dụng</a>
            </div>
            <div className="item-download popover">
              <img
                className="qr-img"
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5b6e787c2e5ee052.png"
                alt="download_qr_code"
              />
              <div className="item-download__list">
                <div className="item-download__app">
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/135555214a82d8e1.png"
                    alt="App Store"
                  />
                </div>
                <div className="item-download__app">
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1fddd5ee3e2ead84.png"
                    alt="Google Play"
                  />
                </div>
                <div className="item-download__app">
                  <img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/4abb5c0809818b22.png"
                    alt="AppGallery"
                  />
                </div>
              </div>
            </div>
          </li>
          <li className="navbar__item navbar__wall">Kết Nối</li>
          <a class="navbar__icon-link" href="#">
            <FaFacebook style={{ fontSize: "18px" }} />
          </a>
          <a class="navbar__icon-link" href="#">
            <RiInstagramFill style={{ fontSize: "18px" }} />
          </a>
        </ul>

        <ul className="navbar__list flex__center navbar__right">
          <li className="notify-popover__wrapper">
            <div className="navbar__item">
              <a className="navbar__notify-link flex__center">
                <IoNotificationsOutline
                  style={{ fontSize: "20px", marginRight: "4px" }}
                />
                <p>Thông Báo</p>
              </a>
            </div>
            <div className="notify-popover popover__wrapper">
              <div className="notify-popover__arrow popover__arrow"></div>
              <div className="notify-popover__box popover__box">
                <div className="popover__header">Thông Báo Mới Nhận</div>
                <div className="popover__content">
                  <div className="popover__content-item">
                    <div className="item-img">
                      <img
                        src="https://lzd-img-global.slatic.net/g/p/3ad68c4b6c7db9a542c4ce5972d94429.jpg_320x320.jpg_582x582.jpg"
                        alt="Ảnh Sản Phẩm"
                      />
                    </div>
                    <div className="item-text">
                      <div className="item-text__subheading">
                        Combo Voucher của bạn sắp hết hạn!😨
                      </div>
                      <div className="item-text__note">
                        ⏰ Combo voucher Freeship + giảm trực tiếp cho đơn 0Đ sẽ
                        hết hạn vào 15-08-2024! Chốt đơn nha sốp ơi!
                      </div>
                    </div>
                  </div>

                  <div className="popover__content-item">
                    <div className="item-img">
                      <img
                        src="https://lzd-img-global.slatic.net/g/p/1e15e7910edd743da37100187b68237e.jpg_248x248.jpg"
                        alt="Ảnh Sản Phẩm"
                      />
                    </div>

                    <div className="item-text">
                      <div className="item-text__subheading">
                        Bạn đã nhận combo Voucher!😁
                      </div>
                      <div className="item-text__note">
                        1 Mã Freeship + 1 Mã giảm trực tiếp cho đơn 0Đ Mã hết
                        hạn vào ngày 15-08-2024! 😤
                      </div>
                      <div className="item-text__img">
                        <img
                          src="https://down-vn.img.susercontent.com/file/b117a072068555519492fd244b6237ed"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="popover__btn flex__center">
                  Xem Tất Cả
                </a>
              </div>
            </div>
          </li>
          <li className="navbar__item flex__center">
            <AiOutlineQuestionCircle
              style={{ fontSize: "20px", marginRight: "4px" }}
            />
            <p>Hỗ Trợ</p>
          </li>
          <li className="language__wrapper">
            <div className="navbar__item flex__center">
              <TfiWorld style={{ fontSize: "16px", marginRight: "4px" }} />
              <p>{primaryLanguage}</p>
              <IoChevronDownOutline
                style={{ fontSize: "18px", marginLeft: "4px" }}
              />
            </div>
            <div className="language__popover popover__wrapper">
              <div className="language__popover-arrow popover__arrow"></div>
              <div className="language__popover-box popover__box">
                {language.map((item) => (
                  <div
                    key={item}
                    className={`language__popover-item ${
                      item === primaryLanguage ? "primary-color" : ""
                    }`}
                    onClick={() => changeLanguage(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </li>
          <a href="/register" className="navbar__item">
            Đăng Ký
          </a>
          <div className="navbar__item-separator"></div>
          <a href="/login" className="navbar__item">
            Đăng Nhập
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
