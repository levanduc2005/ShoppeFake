import React, { useState } from "react";
import "./ListProduct.css";
import { data } from "../../constants";
import Panel from "../Panel/Panel";
import Board from "../Board/Board";

const findTopItems = (boardData, typeData) => {
  const brandCount = {};
  boardData.forEach((item) => {
    const brand = item[typeData];
    if (brandCount[brand]) brandCount[brand]++;
    else brandCount[brand] = 1;
  });
  return Object.entries(brandCount).sort((a, b) => b[1] - a[1]);
};

const location = findTopItems(data.boardData, "location")
  .slice(0, 16)
  .map((item) => item[0]);

const brand = findTopItems(data.boardData, "brand")
  .slice(0, 10)
  .map((item) => item[0]);

const titleProducts = findTopItems(data.boardData, "title")
  .slice(0, 16)
  .map((item) => item[0]);

// function
const ListProduct = ({ validPrice }) => {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [board, setBoard] = useState(
    data.boardData.filter((item) => item.popular)
  );
  const [arrayBoard, setArrayBoard] = useState(
    data.boardData.filter((item) => item.popular)
  );
  const [checkedItems, setCheckedItems] = useState(new Map());
  const [activeIndex, setActiveIndex] = useState(null);
  const [hideErrorText, setHideErrorText] = useState(true);
  const [optionSelected, setOptionSelected] = useState(0);
  const [showPriceArrange, setShowPriceArrange] = useState("Giá");
  const [pagePrimary, setPagePrimary] = useState(1);

  const renderBoard = () => {
    const filteredBoard = data.boardData.filter((item) => item.popular);
    setArrayBoard(filteredBoard);
    setBoard(filteredBoard);
  };

  const handleChangePrice = () => {
    const from = Number(priceFrom);
    const to = Number(priceTo);
    const filteredBoard = arrayBoard.filter(
      (item) => item.price_current >= from && item.price_current <= to
    );
    setBoard(filteredBoard);
  };

  const handleClickRate = (index) => {
    const newBoard = arrayBoard.filter((item) => item.rate >= 5 - index);
    setBoard(newBoard);
  };

  const handleResetFilters = () => {
    // Reset giá trị các input và biến trạng thái về giá trị ban đầu
    setCheckedItems(new Map());
    setHideErrorText(true);
    setPriceFrom("");
    setPriceTo("");
  };

  const showListFollowOption = (array) => {
    let newBoard = [...array];
    if (optionSelected === 0) {
      newBoard = newBoard.filter((item) => item.popular);
    } else if (optionSelected === 1) {
      newBoard = newBoard.filter((item) => item.lastest);
    } else if (optionSelected === 2) {
      newBoard = newBoard.filter((item) => item.best_selling);
    }
    return newBoard;
  };

  const handleCLickOption = (index) => {
    setOptionSelected(index);
    setShowPriceArrange("giá");
    handleRangeFollowOption(index);
    setPagePrimary(1);
  };

  const handleRangeFollowOption = (index) => {
    let newBoard = [...arrayBoard];
    if (index === 0) {
      newBoard = newBoard.filter((item) => item.popular);
    } else if (index === 1) {
      newBoard = newBoard.filter((item) => item.lastest);
    } else if (index === 2) {
      newBoard = newBoard.filter((item) => item.best_selling);
    }
    setBoard(newBoard);
  };

  const handleClickActiveCategory = (index) => {
    handleResetFilters();
    handleCLickOption(0);
    setActiveIndex(index);
    if (index != null) {
      const arrayList = data.boardData.filter(
        (item) => item.title === titleProducts[index]
      );
      setArrayBoard(arrayList);
      setBoard(arrayList.filter((item) => item.popular));
    } else {
      renderBoard();
    }
  };

  const handleCheckboxClick = (group, items, index) => {
    setCheckedItems((prevState) => {
      const newState = new Map(prevState);
      if (newState.get(group) === index) {
        newState.delete(group);
        setBoard(showListFollowOption(arrayBoard));
      } else {
        newState.set(group, index);
        const arrayList = arrayBoard.filter(
          (item) => item[group] === items[index]
        );
        setBoard(showListFollowOption(arrayList));
      }
      return newState;
    });
  };

  return (
    <div className="product__section container__wrapper">
      <div className="product__wrapper container">
        <Panel
          setPriceFrom={setPriceFrom}
          setPriceTo={setPriceTo}
          priceFrom={priceFrom}
          priceTo={priceTo}
          handleChangePrice={handleChangePrice}
          handleClickRate={handleClickRate}
          handleResetFilters={handleResetFilters}
          setCheckedItems={setCheckedItems}
          checkedItems={checkedItems}
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          setHideErrorText={setHideErrorText}
          hideErrorText={hideErrorText}
          setBoard={setBoard}
          arrayBoard={arrayBoard}
          setArrayBoard={setArrayBoard}
          renderBoard={renderBoard}
          handleCLickOption={handleCLickOption}
          handleClickActiveCategory={handleClickActiveCategory}
          handleCheckboxClick={handleCheckboxClick}
          location={location}
          brand={brand}
          titleProducts={titleProducts}
        />
        {board?.length > 0 ? (
          <Board
            board={board}
            setBoard={setBoard}
            optionSelected={optionSelected}
            setOptionSelected={setOptionSelected}
            showPriceArrange={showPriceArrange}
            setShowPriceArrange={setShowPriceArrange}
            arrayBoard={arrayBoard}
            handleCLickOption={handleCLickOption}
            handleRangeFollowOption={handleRangeFollowOption}
            validPrice={validPrice}
            pagePrimary={pagePrimary}
            setPagePrimary={setPagePrimary}
          />
        ) : (
          <div className="shoppe-search-empty-result">
            <img
              className="shoppe-search-empty-result__icon"
              src={data.imgUrlNoProduct}
              alt="img_no_product"
            />
            <div className="shoppe-search-empty-result__hint">
              Hix. Không có sản phẩm nào. Bạn thử tắt điều kiện lọc và tìm lại
              nhé?
            </div>
            <div className="shoppe-search-empty-result__or">or</div>
            <button
              onClick={() => {
                handleResetFilters();
                setBoard(arrayBoard.filter((item) => item.popular));
              }}
              className="shoppe-search-empty-result__btn"
            >
              Xoá bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
