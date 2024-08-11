import React, { useState } from 'react';
import "./Main.css";
import Card from '../Card/Card';
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import img5 from "../../assets/img5.jpg"
import img6 from "../../assets/img6.jpg"
import img7 from "../../assets/img7.jpg"
import img8 from "../../assets/img8.jpg"
import img9 from "../../assets/img9.jpg"
import img10 from "../../assets/img10.jpg"
import img11 from "../../assets/img11.jpg"
import img12 from "../../assets/img12.jpg"
import img13 from "../../assets/img13.jpg"
import TryItNowCard from '../Card/TryItNowCard';
import nextProductBar from "../../assets/nextProducts.png";
import products from "../../assets/Products/products.json";

export default function Main() {
  const [showPopup, setShowPopup] = useState(false);
  const imageList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='relative' style={{ width: "80%" }}>
      <div className='flex flex-col justify-start text-black'>
        <div id="results-container" className="flex flex-row items-center justify-start flex-shrink-0 ml-6">
          <section>
            <div>
              <div>
                <div className="mr-1 block mb-4 mt-4">
                  <h1 className="leading-6 m-0 inline text-xl sans-serif" style={{ fontWeight: 700 }}>
                    Mens Clothing in Mens Clothing
                    <span className="text-base fw3 ml-1 mt-1 gray normal self-center" style={{ color: "#74767c", fontWeight: 400 }}>
                      (1000+)
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex flex-row items-center flex-shrink-0 ml-6">
          <span style={{ color: "#2e2f32" }}>Uses external data. Price when purchased online</span>
        </div>
        <section>
          <div className='flex flex-wrap w-full flex-grow-0 flex-shrink-0 pr-0 pl-6 mt-0 grid-container'>
            {products.map(({ price, decimal, type, desc, date, isInWishlist }, index) => (
              <Card image={imageList[index]} onTryItNow={handleShowPopup} price={price} decimal={decimal} type={type} desc={desc} date={date} isInWishlist={isInWishlist} />
            ))}
          </div>
        </section>
        {showPopup && <TryItNowCard onClose={handleClosePopup} />}
      </div>
      <div className='flex justify-center items-center mt-6 mb-4'>
        <img src={nextProductBar}/>
      </div>
    </div>
  );
}
