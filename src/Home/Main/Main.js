import React, { useState } from 'react';
import "./Main.css";
import Card from '../Card/Card';
import TryItNowCard from '../Card/TryItNowCard';
import ProductDetail from '../Product/ProductDetail';
import nextProductBar from "../../assets/nextProducts.png";
import products from "../../assets/Products/products.json";

export default function Main(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [selectedProduct, setSelectedProduct] = useState(null);


  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleShowProductDetail = (product, image) => {
    setSelectedImage(image);
    setSelectedProduct(product);
    setShowProductDetail(true);
  };

  const handleCloseProductDetail = () => {
    setShowProductDetail(false);
    setSelectedProduct(null);
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
            {products.map((product, index) => (
              <Card
                key={index}
                image={imageList[index]}
                onTryItNow={handleShowPopup}
                onProductClick={() => handleShowProductDetail(product, imageList[index])}
                price={product.price}
                decimal={product.decimal}
                type={product.type}
                desc={product.desc}
                date={product.date}
                isInWishlist={product.isInWishlist}
              />
            ))}
          </div>
        </section>
        {showPopup && <TryItNowCard onClose={handleClosePopup} />}
        {showProductDetail && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            image = {selectedImage}
            onClose={handleCloseProductDetail}
            cartItems={props.cartItems} 
            setCartItems={props.setCartItems}
          />
        )}
      </div>
      <div className='flex justify-center items-center mt-6 mb-4'>
        <img src={nextProductBar} />
      </div>
    </div>
  );
}
