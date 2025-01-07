import React, { useState } from "react";

import "./BoxInLogin.css";
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri";

function BoxInLogin() {
  const [hidePass, setHidePass] = useState(true);

  return (
    <div>
      <div className="login__info-header">
        <span className="login__info-header__text">Đăng nhập</span>
        <div className="login__info-header__qr">
          <div className="login__info-qr__text">Đăng nhập với mã QR</div>
          <a href="/login/qr" className="login__info-qr__link">
            <svg width="40" height="40" fill="none" class="login__qr-image">
              <g clip-path="url(#clip0)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z"
                  fill="#EE4D2D"
                ></path>
                <path d="M37 37H22.5v3H40V22.5h-3V37z" fill="#EE4D2D"></path>
                <path
                  d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z"
                  fill="#EE4D2D"
                ></path>
                <path fill="#fff" d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z"></path>
              </g>
              <defs>
                <clipPath id="clip0">
                  <path fill="#fff" d="M0 0h40v40H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <div className="login__info-body">
        <div className="login__info-notifi__error"></div>
        <form>
          <div className="input-box">
            <div className="input-box__wrapper">
              <input
                type="text"
                placeholder="Email/Số điện thoại/Tên đăng nhập"
                className="input-text"
              />
            </div>
            <div className="input-error"></div>
          </div>
          <div className="input-box">
            <div className="input-box__wrapper">
              <>
                <input
                  type={hidePass ? "password" : "text"}
                  placeholder="Mật khẩu"
                  className="input-text"
                />
                <button
                  type="button"
                  onClick={() => setHidePass((pre) => !pre)}
                  className="login__input-text__eye"
                >
                  {hidePass ? (
                    <RiEyeCloseLine className="login__input-text__btn" />
                  ) : (
                    <RiEyeFill className="login__input-text__btn" />
                  )}
                </button>
              </>
            </div>
            <div className="input-error"></div>
          </div>
          <button className="login__btn">Đăng Nhập</button>
        </form>
        <div className="login__body-others">
          <a href="/login/forgetPass">Quên mật khẩu</a>
          <a href="/login/sms">Đăng nhập với SMS</a>
        </div>
        <div className="login__social-media">
          <div className="social-dash">
            <div className="social-dash__div"></div>
            <div className="social-dash__text">hoặc</div>
            <div className="social-dash__div"></div>
          </div>
          <div className="social-list">
            <div className="social-btn">
              <div className="social-btn__img face__img"></div>
              <div className="social-btn__text">Facebook</div>
            </div>
            <div className="social-btn">
              <div className="social-btn__img gg__img"></div>
              <div className="social-btn__text">Google</div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-footer">
        Bạn mới biết đến Shopee?
        <a href="/register" className="btn__info">
          Đăng ký
        </a>
      </div>
    </div>
  );
}

export default BoxInLogin;
