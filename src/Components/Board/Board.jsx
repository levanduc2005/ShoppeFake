/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Board.css";
import BoardContent from "../BoardContent/BoardContent";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { TiTick } from "react-icons/ti";

const options = ["phổ biến", "mới nhất", "bán chạy"];
const priceArrange = ["giá: thấp đến cao", "giá: cao đến thấp"];

const Board = ({
  board,
  setBoard,
  optionSelected,
  setOptionSelected,
  showPriceArrange,
  setShowPriceArrange,
  handleCLickOption,
  validPrice,
  pagePrimary,
  setPagePrimary,
}) => {
  const numberItemsEachPage = 30;
  const numberPages = Math.ceil(board.length / numberItemsEachPage);
  const [showPrice, setShowPrice] = useState(false);

  // Sắp xếp theo giá
  const handleClickPriceArrange = (arrange, index) => {
    setShowPriceArrange(arrange);
    setOptionSelected(-1);
    setShowPrice(false);
    const sortedBoard = [...board].sort((a, b) => {
      if (index === 0) {
        return a.price_current - b.price_current; // Thấp đến cao
      } else {
        return b.price_current - a.price_current; // Cao đến thấp
      }
    });
    setBoard(sortedBoard);
  };

  // Các lựa chọn

  return (
    <section className="board__section">
      <fieldset className="board__navbar">
        <div className="board__navbar-label">Sắp xếp theo</div>
        <div className="board__navbar-options">
          <section className="board__navbar-options-group">
            {options.map((option, index) => (
              <button
                onClick={() => handleCLickOption(index)}
                key={index}
                className={`board__navbar-options-item ${
                  optionSelected === index
                    ? "board__navbar-options-selected"
                    : ""
                }`}
              >
                <span>{option}</span>
              </button>
            ))}
          </section>
          <button
            onMouseEnter={() => setShowPrice(true)}
            onMouseLeave={() => setShowPrice(false)}
            className="board__navbar-options-price-select board__navbar-options-item"
          >
            <div className="board__navbar-options-price-select-wrapper">
              <span
                style={{
                  color:
                    optionSelected === -1 ? "var(--primary-color)" : "#000",
                }}
              >
                {showPriceArrange}
              </span>
              <IoIosArrowDown className="board__navbar-options-price-select__down" />
            </div>
            {showPrice && (
              <div className="board__navbar-options-price-select-popover popover__wrapper">
                <div className="board__navbar-options-price-select-popover__box popover__box">
                  <ul className="price-select-popover__box-list">
                    {priceArrange.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleClickPriceArrange(item, index)}
                        className="price-select-popover__box-item"
                      >
                        <span>{item}</span>
                        {showPriceArrange.toUpperCase() ===
                        item.toUpperCase() ? (
                          <TiTick className="price-select-popover__box-item-tick" />
                        ) : (
                          <></>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </button>
        </div>
        <div className="board__navbar-page-controller">
          <div className="board__navbar-page-controller__state">
            <span className="board__navbar-page-controller__state-current">
              {pagePrimary}
            </span>
            /
            <span className="board__navbar-page-controller__state-total">
              {numberPages}
            </span>
          </div>
          <a
            onClick={() => pagePrimary > 1 && setPagePrimary(pagePrimary - 1)}
            className={`board__navbar-page-controller__btn ${
              pagePrimary === 1 ? "disabled" : ""
            }`}
          >
            <MdArrowBackIos
              style={{ marginLeft: "2px" }}
              className="board__navbar-page-controller__btn-icon"
            />
          </a>
          <a
            onClick={() =>
              pagePrimary < numberPages && setPagePrimary(pagePrimary + 1)
            }
            className={`board__navbar-page-controller__btn ${
              pagePrimary === numberPages ? "disabled" : ""
            }`}
          >
            <MdArrowForwardIos className="board__navbar-page-controller__btn-icon" />
          </a>
        </div>
      </fieldset>
      <BoardContent
        pagePrimary={pagePrimary}
        setPagePrimary={setPagePrimary}
        board={board}
        numberPages={numberPages}
        numberItemsEachPage={numberItemsEachPage}
        validPrice={validPrice}
      />
    </section>
  );
};

export default Board;
