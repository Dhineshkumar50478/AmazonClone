import React, { useEffect, useState } from "react";
import "../css/Landing.css";
import ProductGridContainer from "./ProductGridContainer";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import axios from "axios";

const Landing = () => {
  const [product, setProduct] = useState([]);
  const [slideData, setSlideData] = useState([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/landing/product");
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    const fetchSlideData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/landing/slide/");
        setSlideData(response.data);
      } catch (error) {
        console.error("Error fetching slide data:", error);
      }
    };

    fetchData();
    fetchSlideData();
  }, []);

  // Slide change handler for left/right navigation
  const handleSlideChange = (direction) => {
    if (slideData.length > 0) {
      if (direction === "left") {
        setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? slideData.length - 1 : prevIndex - 1));
      } else {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slideData.length);
      }
    }
  };

  // Get the current slide URL
  const currentSlideUrl = slideData[currentSlideIndex]?.slideUrl || "";

  return (
    <div className="landingPageBlock">
      <div
        className="slideProductBlock"
        style={{ backgroundImage: `url(${currentSlideUrl})` }}
      >
        <div className="leftSlideBlock">
          <span onClick={() => handleSlideChange("left")}>
            <FaChevronLeft />
          </span>
        </div>
        <div className="rightSlideBlock">
          <span onClick={() => handleSlideChange("right")}>
            <FaChevronRight />
          </span>
        </div>
      </div>
      <div className="productShowcaseBlock">
        <ProductGridContainer products={product} />
      </div>
    </div>
  );
};

export default Landing;
