import React from "react";

import "./BoxInRegister.css";

function BoxInRegister() {
  return (
    <div>
      <div className="register__header">Đăng ký</div>
      <div className="register__body">
        <div className="register__body-error__notify"></div>
        <form>
          <div className="input-box">
            <div className="input-box__wrapper">
              <input
                type="text"
                placeholder="Số điện thoại"
                className="input-text"
              />
            </div>
            <div className="input-error"></div>
          </div>
          <button className="login__btn register__btn">Tiếp theo</button>
        </form>
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
        <div className="register__policy">
          Bằng việc đăng kí, bạn đã đông ý với Shopee về
          <p>
            <a href="/policy" className="register__policy-link">
              Điều khoản dịch vụ
            </a>
            &
            <a href="/policy" className="register__policy-link">
              Chính sách bảo mật
            </a>
          </p>
        </div>
      </div>
      <div className="info-footer">
        Bạn đã có tài khoản?
        <a href="/login" className="btn__info">
          Đăng nhập
        </a>
      </div>
    </div>
  );
}

export default BoxInRegister;
