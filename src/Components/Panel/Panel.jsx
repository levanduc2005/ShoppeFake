/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Panel.css";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { TbFilterSearch } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { GoStar, GoStarFill } from "react-icons/go";

const categoryProducts = [
  "Áo thun (889k+)",
  "Áo sơ mi (183k+)",
  "Phụ kiện thời trang (145k+)",
  "áo khoác (135k+)",
  "áo khoác (135k+)",
];

const logistic = ["hoả tốc", "nhanh", "tiết kiệm"];

const Panel = (props) => {
  const [countCategory, setCountCategory] = useState(5);
  const [countSearchFilter, setCountSearchFilter] = useState(4);
  const [countLocationFilter, setCountLocationFilter] = useState(4);
  const [countBrandFilter, setCountBrandFilter] = useState(4);
  const [countRateFilter, setCountRateFilter] = useState(4);

  const handleClickBtnPrice = () => {
    if (Number(props.priceFrom) < Number(props.priceTo)) {
      props.handleChangePrice();
      props.setHideErrorText(true);
    } else {
      props.setHideErrorText(false);
    }
  };

  const renderCheckboxes = (group, items, count) => (
    <TransitionGroup>
      {items.slice(0, count).map((item, index) => (
        <CSSTransition key={index} timeout={300} classNames="fade">
          <li
            onClick={() => props.handleCheckboxClick(group, items, index)}
            className="shoppe-checkbox-filter"
          >
            <label className="item-checkbox__control">
              <div className="item-checkbox__box item-checkbox__box--checked">
                {props.checkedItems.get(group) === index ? <TiTick /> : <></>}
              </div>
              <span className="item-checkbox__label">{item}</span>
            </label>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );

  const addButton = (count, length, setFunction) => {
    if (count < length) {
      return (
        <button onClick={() => setFunction(length)} className="panel__add-box">
          Thêm
          <IoIosArrowDown className="panel__add-btn" />
        </button>
      );
    }
  };

  return (
    <section className="panel__section">
      <div className="panel__category-list">
        <a className="panel__category-list-header">
          <TfiMenuAlt className="panel__category-list-header-icon" />
          Tất Cả Danh Mục
        </a>
        <div className="panel__category-list-body">
          <a
            href="#"
            className={`panel__category-list-main panel__category-list-item ${
              props.activeIndex === null ? "active__list" : ""
            }`}
            onClick={() => props.handleClickActiveCategory(null)}
          >
            <MdArrowRight className="panel__category-list-body-icon" />
            title product
          </a>
          <TransitionGroup className="panel__category-list-sub">
            {props.titleProducts.slice(0, countCategory).map((item, index) => (
              <CSSTransition key={index} timeout={300} classNames="fade">
                <a
                  onClick={() => props.handleClickActiveCategory(index)}
                  className={`panel__category-list-item ${
                    props.activeIndex === index ? "active__list" : ""
                  }`}
                >
                  <MdArrowRight className="panel__category-list-body-icon" />
                  {item}
                </a>
              </CSSTransition>
            ))}
          </TransitionGroup>

          {addButton(
            countCategory,
            props.titleProducts.length,
            setCountCategory
          )}
        </div>
      </div>
      <div className="panel__search-filter ">
        <TbFilterSearch />
        <div className="panel__search-filter__text">bộ lọc tìm kiếm</div>
      </div>
      <div className="panel__facet-filter shoppe-filter-group">
        <div className="panel__facet-filter__header">theo danh Mục</div>
        <ul className="panel__facet-filter__body">
          {renderCheckboxes("category", categoryProducts, countSearchFilter)}
          {addButton(
            countSearchFilter,
            categoryProducts.length,
            setCountSearchFilter
          )}
        </ul>
      </div>
      <div className="panel__location-filter shoppe-filter-group">
        <div className="panel__facet-filter__header">nơi bán</div>
        <ul className="panel__facet-filter__body">
          {renderCheckboxes("location", props.location, countLocationFilter)}
          {addButton(
            countLocationFilter,
            props.location.length,
            setCountLocationFilter
          )}
        </ul>
      </div>
      <div className="panel__logistic-filter  shoppe-filter-group">
        <div className="panel__facet-filter__header">đơn vị vận chuyển</div>
        <ul className="panel__facet-filter__body">
          {renderCheckboxes("logistic", logistic, logistic.length)}
        </ul>
      </div>
      <div className="panel__brand-filter  shoppe-filter-group">
        <div className="panel__facet-filter__header">thương hiệu</div>
        <ul className="panel__facet-filter__body">
          {renderCheckboxes("brand", props.brand, countBrandFilter)}
          {addButton(countBrandFilter, props.brand.length, setCountBrandFilter)}
        </ul>
      </div>
      <div className="panel__price-filter shoppe-filter-group">
        <div className="panel__facet-filter__header">khoảng giá</div>
        <div className="panel__price-input">
          <input
            type="text"
            maxLength={13}
            className="panel__price-input__item"
            placeholder="₫ TỪ"
            inputMode="numeric"
            value={props.priceFrom}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
            onChange={(e) => props.setPriceFrom(e.target.value)}
          />
          <div className="panel__price-input__line"></div>
          <input
            type="text"
            maxLength={13}
            className="panel__price-input__item"
            placeholder="₫ ĐẾN"
            inputMode="numeric"
            value={props.priceTo}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
            onChange={(e) => props.setPriceTo(e.target.value)}
          />
        </div>
        {!props.hideErrorText && (
          <span className="panel__price-error-text">
            Vui lòng điền khoảng giá thích hợp
          </span>
        )}
        <button onClick={handleClickBtnPrice} className="panel__btn">
          áp dụng
        </button>
      </div>
      <div className="panel__rate-filter shoppe-filter-group">
        <div className="panel__facet-filter__header">đánh giá</div>
        <div className="panel__rate-filter__body">
          <TransitionGroup>
            {Array(countRateFilter)
              .fill()
              .map((_, i) => (
                <CSSTransition key={i} timeout={300} classNames="fade">
                  <div
                    onClick={() => props.handleClickRate(i)}
                    key={i}
                    className="panel__rate-filter-item"
                  >
                    {Array(5)
                      .fill()
                      .map((_, index) =>
                        index < 5 - i ? (
                          <GoStarFill
                            key={index}
                            className="panel__rate-filter-item-icon"
                          />
                        ) : (
                          <GoStar
                            key={index}
                            className="panel__rate-filter-item-icon"
                          />
                        )
                      )}
                    {i > 0 ? (
                      <span style={{ textTransform: "lowercase" }}>
                        trở lên
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                </CSSTransition>
              ))}
          </TransitionGroup>
          {addButton(countRateFilter, 5, setCountRateFilter)}
        </div>
      </div>
      <button
        onClick={() => {
          props.handleResetFilters();
          props.setBoard(props.arrayBoard.filter((item) => item.popular));
        }}
        className="panel__btn remove-all-btn"
      >
        xoá tất cả
      </button>
    </section>
  );
};

export default Panel;
