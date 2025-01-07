/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "./Advertisement.css";
import { images } from "../../constants";

const Advertisement = () => {
  const imgAdverts = [
    images.imgAdvert1,
    images.imgAdvert2,
    images.imgAdvert3,
    images.imgAdvert4,
    images.imgAdvert5,
    images.imgAdvert6,
    images.imgAdvert7,
    images.imgAdvert8,
  ];

  const extendAdverts = [
    imgAdverts[imgAdverts.length - 1],
    ...imgAdverts,
    imgAdverts[0],
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => clickRight(), 4000);
  };

  useEffect(() => {
    resetAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [extendAdverts.length]);

  const handleTransitionEnd = () => {
    if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(imgAdverts.length);
    } else if (currentIndex >= imgAdverts.length + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else {
      setIsTransitioning(true);
    }
  };

  const clickLeft = () => {
    handleTransitionEnd();
    setCurrentIndex((pre) => pre - 1);
    resetAutoSlide();
  };

  const clickRight = () => {
    handleTransitionEnd();
    setCurrentIndex((pre) => pre + 1);
    resetAutoSlide();
  };

  const clickDot = (index) => {
    setCurrentIndex(index + 1);
    resetAutoSlide();
  };

  return (
    <div className="advertisement__section container__wrapper">
      <div className="advertisement__section-wrapper container">
        <div className="advertisement__section-box">
          <div className="advertisement__img-list">
            {extendAdverts.map((img, index) => (
              <a
                key={index}
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                  transition: isTransitioning ? "transform 0.5s ease" : "none",
                }}
                className="advertisement__img-item"
                onTransitionEnd={handleTransitionEnd}
              >
                <img src={img} alt="" />
              </a>
            ))}
          </div>
          <div
            onClick={clickLeft}
            className="advertisement__icon advertisement__icon-left"
          >
            <FaChevronLeft />
          </div>
          <div
            onClick={clickRight}
            className="advertisement__icon advertisement__icon-right"
          >
            <FaChevronRight />
          </div>
          <div className="advertisement__dots-list">
            {imgAdverts.map((_, index) => (
              <span
                key={index}
                className={`advertisement__dots-item ${
                  index + 1 === currentIndex ? "active__advertisement" : ""
                }`}
                onClick={() => clickDot(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
