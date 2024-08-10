import React, { useState } from 'react';
import "./Main.css";
import Card from '../Card/Card';
import polo1 from "../../assets/polo1.jpg";
import TryItNowCard from '../Card/TryItNowCard';

export default function Main() {
  const [showPopup, setShowPopup] = useState(false);

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
          <div className='flex flex-wrap w-100 flex-grow-0 flex-shrink-0 pr-0 pl-6 mt-0'>
            <Card image={polo1} onTryItNow={handleShowPopup} />
          </div>
        </section>
        {showPopup && <TryItNowCard onClose={handleClosePopup} />}
      </div>
    </div>
  );
}
