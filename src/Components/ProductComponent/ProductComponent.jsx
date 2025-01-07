import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductComponent.css";
import { data } from "../../constants";
import { GoStarFill } from "react-icons/go";
import { CiCircleQuestion } from "react-icons/ci";
import { LuMinus, LuPlus } from "react-icons/lu";
import { BsCart4 } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

function ProductComponent({
  id,
  setCart,
  addCart,
  valueQuantity,
  setValueQuantity,
}) {
  const [popupAddCart, setPopupAddCart] = useState(false);
  const [isClickLikeBtn, setIsClickLikeBtn] = useState(false);

  const navigate = useNavigate();

  const product = data.boardData.find((item) => item.id === Number(id));

  const handleClickAddBtn = () => {
    setPopupAddCart(true);
    setTimeout(() => {
      setPopupAddCart(false);
    }, 2000);
  };

  const handleClickBuyNowBtn = () => {
    addCart(product);
    setCart((prev) => {
      const updatedCart = prev.map((item) =>
        item.id === Number(id) ? { ...item, checked: true } : item
      );
      return updatedCart;
    });
    navigate("/cart");
  };

  const handleClickLikeBtn = () => {
    setIsClickLikeBtn(!isClickLikeBtn);
  };

  return (
    <section className="container__wrapper">
      <div className="product container">
        <section className="img__box">
          <div
            className="product__img"
            style={{ backgroundImage: `url(${product.image})` }}
          ></div>
          <div className="product__social">
            <div className="product__social-icon">
              Chia sẻ:
              <button className="product__social-btn mess"></button>
              <button className="product__social-btn face"></button>
              <button className="product__social-btn pinterest"></button>
              <button className="product__social-btn twitter"></button>
            </div>
            <div className="product__social-like">
              {!isClickLikeBtn ? (
                <svg
                  onClick={() => handleClickLikeBtn()}
                  width="24"
                  height="20"
                  style={{ cursor: "pointer" }}
                >
                  <path
                    d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z"
                    stroke="#FF424F"
                    stroke-width="1.5"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              ) : (
                <svg
                  onClick={() => handleClickLikeBtn()}
                  width="24"
                  height="20"
                  style={{ cursor: "pointer" }}
                >
                  <path
                    d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z"
                    stroke="#FF424F"
                    stroke-width="1.5"
                    fill="#FF424F"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              )}

              <div className="product__like-quantity">Đã thích (2,4k)</div>
            </div>
          </div>
        </section>
        <section className="description__box">
          <div className="product__name">
            {product.like ? (
              <div className="product__name-like">Yêu thích</div>
            ) : (
              <></>
            )}
            <span>{product.title}</span>
          </div>
          <div className="product__evaluate">
            <button className="product__evaluate-item">
              <div className="evaluate__item-number">{product.rate}</div>
              <div className="item__detail-box__footer-rate product__evaluate-star">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <div key={i} className="item__detail-box__footer-rate-star">
                      <GoStarFill className="item__detail-box__footer-rate-star-icon" />
                      <div
                        className="item__detail-box__footer-rate-star-layer"
                        style={{
                          width: `${
                            product.rate >= i + 1
                              ? 0
                              : 100 - (product.rate - i) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  ))}
              </div>
            </button>
            <button className="product__evaluate-item">
              <div className="evaluate__item-number">5.1k</div>
              <div className="evaluate__item-text">Đánh giá</div>
            </button>
            <div className="product__evaluate-item">
              <div className="evaluate__item-number">
                {product.sold >= 1000
                  ? `${(product.sold / 1000).toFixed(0)}k`
                  : product.sold}
              </div>
              <div className="evaluate__item-text">Đã bán</div>
            </div>
            <button className="evaluate__item-text evaluate__denounce">
              Tố cáo
            </button>
          </div>
          <div className="product__price">
            <div className="product__price-heading">
              <img
                className="price__heading-img"
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/8dbf303bff17e5d41618.svg"
                alt=""
              />
            </div>
            <div className="product__price-box">
              <div className="item__detail-box__price-current price__current">
                ₫{product.price_current}
              </div>
              {product.price_current < product.price_before ? (
                <>
                  <div className="item__detail-box__price-before price__before">
                    ₫{product.price_before}
                  </div>
                  <div className="item__detail-box__price-discount price__percent-discount">
                    -
                    {(
                      ((product.price_before - product.price_current) /
                        product.price_before) *
                      100
                    ).toFixed(0)}
                    %
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="product__detail">
            <section className="product__detail-item">
              <h3 className="product__detail-subheading">
                Chính sách trả hàng
              </h3>
              <div className="detail__item-policy">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b69402e4275f823f7d47.svg"
                  alt=""
                />
                <div className="detail__item-policy__subhead">
                  Trả hàng 15 ngày
                </div>
                <div className="detail__item-policy__text">
                  Trả hàng miễn phí
                </div>
                <CiCircleQuestion className="detail__item-policy__icon" />
              </div>
            </section>
            <section className="product__detail-item">
              <h3 className="product__detail-subheading">Bảo hiểm</h3>
              <div className="detail__item-insurance">
                <div className="detail__item-insurance__text">
                  Bảo hiểm Thời trang
                </div>
                <div className="detail__item-insurance__new">Mới</div>
              </div>
            </section>
            <section className="product__detail-item">
              <h3 className="product__detail-subheading">Số lượng</h3>
              <div className="detail__item-quantity">
                <div className="detail__item-quantity__select">
                  <button
                    className="quantity__select-decrease quantity__select-btn"
                    onClick={() => {
                      if (valueQuantity > 1) {
                        setValueQuantity((pre) => pre - 1);
                      }
                    }}
                  >
                    <LuMinus />
                  </button>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={valueQuantity}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "") {
                        setValueQuantity("");
                      } else {
                        setValueQuantity(Number(value));
                      }
                    }}
                    onBlur={() => {
                      if (
                        !valueQuantity ||
                        valueQuantity < 1 ||
                        valueQuantity > product.sold
                      ) {
                        setValueQuantity(1);
                      }
                    }}
                    className="quantity__select-value quantity__select-btn"
                  />
                  <button
                    className="quantity__select-increase  quantity__select-btn"
                    onClick={() => {
                      if (valueQuantity < product.sold) {
                        setValueQuantity((pre) => pre + 1);
                      }
                    }}
                  >
                    <LuPlus />
                  </button>
                </div>
                <span>{product.sold} sản phẩm có sẵn</span>
              </div>
            </section>
          </div>
          <div className="product__buy-btn">
            <button
              onClick={() => {
                addCart(product);
                handleClickAddBtn();
              }}
              className="buy__btn-shopping-cart"
            >
              <BsCart4 className="buy__btn-shopping-cart__btn" />
              <span>Thêm vào giỏ hàng</span>
            </button>
            {popupAddCart && (
              <div className="popup__add-cart">
                <div className="popup__add-cart__container">
                  <div className="popup__add-cart__btn">
                    <TiTick className="popup__add-cart__icon" />
                  </div>
                  <span>Sản phẩm đã được thêm vào Giỏ hàng</span>
                </div>
              </div>
            )}
            <button
              onClick={() => handleClickBuyNowBtn()}
              className="buy__btn-now"
            >
              Mua Ngay
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default ProductComponent;
