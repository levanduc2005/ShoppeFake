/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./BoardContent.css";
import { GoStarFill } from "react-icons/go";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const BoardContent = ({
  pagePrimary,
  setPagePrimary,
  board,
  numberPages,
  numberItemsEachPage,
  validPrice,
}) => {
  const maxVisiblePages = 3;

  const renderPageNumbers = () => {
    const pages = [];
    const minShow = Math.max(2, pagePrimary - maxVisiblePages);
    const maxShow = Math.min(numberPages, pagePrimary + maxVisiblePages);

    const createPageButton = (pageNumber) => (
      <a
        onClick={() => setPagePrimary(pageNumber)}
        key={pageNumber}
        href="#!"
        className={`board__footer-btn ${
          pageNumber === pagePrimary ? "board__footer-btn-primary" : ""
        }`}
      >
        {pageNumber}
      </a>
    );

    pages.push(createPageButton(1));

    if (minShow > 2 && maxShow > 5) {
      pages.push(
        <span
          key="dots-left"
          className="board__footer-btn board__footer-btn-dots"
        >
          ...
        </span>
      );
    }

    for (let i = minShow; i <= maxShow; i++) {
      pages.push(createPageButton(i));
    }

    if (maxShow < numberPages && maxShow > 5) {
      pages.push(
        <span
          key="dots-right"
          className="board__footer-btn board__footer-btn-dots"
        >
          ...
        </span>
      );
    }
    if (numberPages > 1 && pagePrimary === 1 && numberPages > maxVisiblePages) {
      pages.push(createPageButton(numberPages));
    }
    return pages;
  };

  return (
    <>
      <ul className="board__content-list">
        {board
          .slice(
            numberItemsEachPage * (pagePrimary - 1),
            numberItemsEachPage * pagePrimary
          )
          .map((item, index) => (
            <li key={index} className="board__content-item">
              <a href={`/product/${item.id}`}>
                <div className="item__wrapper">
                  <div className="item__img-box">
                    <img
                      src={item.image}
                      alt=""
                      className="item__img-box__link"
                    />
                    {item.like && (
                      <div className="item__img-box__like-btn">
                        <span className="item__img-box__like-btn-text">
                          yêu thích
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="item__detail-box">
                    <div className="item__detail-box__description">
                      {item.title}
                    </div>
                    <div className="item__detail-box__price">
                      <div className="item__detail-box__price-current">
                        ₫{validPrice(item.price_current)}
                      </div>
                      {item.price_current < item.price_before ? (
                        <>
                          <div className="item__detail-box__price-before">
                            ₫{item.price_before}
                          </div>
                          <div className="item__detail-box__price-discount">
                            -
                            {(
                              ((item.price_before - item.price_current) /
                                item.price_before) *
                              100
                            ).toFixed(1)}
                            %
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="item__detail-box__footer">
                      <div className="item__detail-box__footer-rate">
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <div
                              key={i}
                              className="item__detail-box__footer-rate-star"
                            >
                              <GoStarFill className="item__detail-box__footer-rate-star-icon" />
                              <div
                                className="item__detail-box__footer-rate-star-layer"
                                style={{
                                  width: `${
                                    item.rate >= i + 1
                                      ? 0
                                      : 100 - (item.rate - i) * 100
                                  }%`,
                                }}
                              ></div>
                            </div>
                          ))}
                      </div>

                      <div className="item__detail-box__footer-sold">
                        Đã bán{" "}
                        {item.sold >= 1000
                          ? `${(item.sold / 1000).toFixed(2)}k`
                          : item.sold}
                      </div>
                    </div>
                    <div className="item__detail-box__location">
                      {item.location}
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
      </ul>
      <nav className="board__footer-wrapper">
        <a
          style={{ cursor: `${pagePrimary === 1 ? "default" : "pointer"}` }}
          onClick={() => pagePrimary > 1 && setPagePrimary(pagePrimary - 1)}
          href="#!"
          className="board__footer-btn btn-left"
        >
          <FaChevronLeft />
        </a>
        {renderPageNumbers()}
        <a
          style={{
            cursor: `${pagePrimary === numberPages ? "default" : "pointer"}`,
          }}
          onClick={() =>
            pagePrimary < numberPages && setPagePrimary(pagePrimary + 1)
          }
          href="#!"
          className="board__footer-btn btn-right"
        >
          <FaChevronRight />
        </a>
      </nav>
    </>
  );
};

export default BoardContent;
