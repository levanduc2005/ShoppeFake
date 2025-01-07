import React from "react";
import "./Footer.css";
import data from "../../constants/data";

const Footer = () => {
  return (
    <footer className="shopee__footer">
      <div className="shoppe__footer-wrapper">
        <div className="shoppe__footer-list">
          <div className="shoppe__footer-list__item">
            <div className="footer__item-box">
              <div className="footer__item-header">chăm sóc khách hàng</div>
              <ul className="footer__item-list">
                {data.customerCare.map((item, index) => (
                  <li key={index} className="footer__item-text">
                    <a href="!#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__item-box">
              <div className="footer__item-header">về shopee</div>
              <ul className="footer__item-list">
                {data.aboutShopee.map((item, index) => (
                  <li key={index} className="footer__item-text">
                    <a href="!#"> {item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__item-box">
              <div className="footer__item-header">thanh toán</div>
              <ul className="footer__item-list-img">
                {data.payImg.map((imgUrl, index) => (
                  <li key={index} className="footer__item-img">
                    <img
                      className="payment-img"
                      src={imgUrl}
                      alt="img payment"
                    />
                  </li>
                ))}
              </ul>
              <div className="footer__item-header header__transport">
                đơn vị vận chuyển
              </div>
              <ul className="footer__item-list-img">
                {data.transportUrl.map((imgUrl, index) => (
                  <li key={index} className="footer__item-img">
                    <img
                      className="transport-img"
                      src={imgUrl}
                      alt="img transport"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__item-box">
              <div className="footer__item-header">theo dõi chúng tôi trên</div>
              <ul className="footer__item-list">
                <li className="footer__item-text">
                  <a href="https://www.facebook.com/profile.php?id=100029980963141">
                    <img
                      src="https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5"
                      alt="img_facebook"
                      className="footer__social-img"
                    />
                    <span className="footer__item-text">facebook</span>
                  </a>
                </li>
                <li className="footer__item-text">
                  <a href="https://www.facebook.com/profile.php?id=100029980963141">
                    <img
                      src="https://down-vn.img.susercontent.com/file/5973ebbc642ceee80a504a81203bfb91"
                      alt="img_instagram"
                      className="footer__social-img"
                    />
                    <span className="footer__item-text">instagram</span>
                  </a>
                </li>
                <li className="footer__item-text">
                  <a href="https://www.facebook.com/profile.php?id=100029980963141">
                    <img
                      src="https://down-vn.img.susercontent.com/file/f4f86f1119712b553992a75493065d9a"
                      alt="img_linkedIn"
                      className="footer__social-img"
                    />
                    <span className="footer__item-text">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__item-box">
              <div className="footer__item-header">
                tải ứng dụng shopee ngay thôi
              </div>
              <div className="footer__item-list-download">
                <a href="!#">
                  <img
                    src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472"
                    alt="download_qr_code"
                    className="footer__item-download-img-qr"
                  />
                </a>
                <div className="footer__item-list-download__app">
                  <a href="!#" className="download__app-link">
                    <img
                      src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163"
                      alt="app"
                      className="download__app-img"
                    />
                  </a>
                  <a href="!#" className="download__app-link">
                    <img
                      src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def"
                      alt="app"
                      className="download__app-img"
                    />
                  </a>
                  <a href="!#" className="download__app-link">
                    <img
                      src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0"
                      alt="app"
                      className="download__app-img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="shoppe__footer-list__country">
            <div className="footer-list__country-title">
              © 2024 Shopee. Tất cả các quyền được bảo lưu.
            </div>
            <div className="footer-list__country-items">
              <div className="footer__country-heading">Quốc gia & Khu vực:</div>
              {data.country.map((item, index) => (
                <div key={index} className="footer-list__country-item">
                  <a href="!#">{item}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="shopee__footer-text">
        <div className="shopee__footer-text__wrapper">
          <div className="shopee__footer-text__header">
            <div className="shopee__footer-text__header-item">
              <a href="!#">chính sách bảo mật</a>
            </div>
            <div className="shopee__footer-text__header-item">
              <a href="!#">quy chế hoạt động</a>
            </div>
            <div className="shopee__footer-text__header-item">
              <a href="!#">chính sách vận chuyển</a>{" "}
            </div>
            <div className="shopee__footer-text__header-item">
              <a href="!#">chính sách trả hàng và hoàn tiền</a>
            </div>
          </div>
          <div className="shopee__footer-text__logo">
            <a href="!#" className="shopee__footer-text__logo-item">
              <div className="shopee__footer-text__logo-img__registered footer__background"></div>
            </a>
            <a href="!#" className="shopee__footer-text__logo-item">
              <div className="shopee__footer-text__logo-img__registered footer__background"></div>
            </a>
            <a href="!#" className="shopee__footer-text__logo-item">
              <div className="shopee__footer-text__logo-img__noFake footer__background"></div>
            </a>
          </div>
          <div className="shopee__footer-text__item footer__name-company">
            Công ty TNHH Shopee
          </div>
          <div className="shopee__footer-text__item">
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
            Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng
            đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
          </div>
          <div className="shopee__footer-text__item">
            Chịu Trách Nhiệm Quản Lý Nội Dung: Lê Văn Đức
          </div>
          <div className="shopee__footer-text__item">
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Thủ Đức
            cấp lần đầu ngày 10/08/2024
          </div>
          <div className="shopee__footer-text__item">
            © 2015 - Bản quyền thuộc về Công ty TNHH LVD
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
