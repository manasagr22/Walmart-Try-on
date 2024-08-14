import React, { useEffect, useState } from 'react'
import "./Payment.css"
import products from '../assets/Products/products.json';
import ProductCard from '../Home/Card/ProductCard';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function Payment() {
    const date = "in 2 days";

    const [totalProducts, setTotalProducts] = useState(products.length);
    const [totalPrice, setTotalPrice] = useState(0.0);
    const [total, setTotal] = useState(0.0);
    const options = [
        "Select an option", "Yes", "No"
    ];

    const [selectedOption, setSelectedOption] = useState(options[0]);

    useEffect(() => {
        if (totalPrice == 0.0) {
            var price = 0.0;
            products.forEach((product) => {
                price += parseFloat(`${product.price}.${product.decimal}`);
            })
            setTotalPrice(price);
            setTotal(price);
        }
    }, [totalPrice, total])

    useEffect(() => {
        if(selectedOption == "Yes") {
            setTotalPrice((total/2).toFixed(2));
        }
        else {
            setTotalPrice(total);
        }
    }, [selectedOption])

    const handleSelectChange = (event) => {
        setSelectedOption(event.value);
    };

    return (
        <div className='flex flex-col flex-auto relative z-1 w-full h-full' style={{ overflow: "hidden" }}>
            <div className='ml-auto mr-auto flex-auto relative z-1' style={{ width: "80%", height: window.innerHeight - 128 + "px" }}>
                <div className='flex' style={{ fontSize: "1.5rem", height: "12%" }}>
                    <span className='font-bold mt-6 mb-6 justify-start items-start' style={{ color: "#2e2f32", fontWeight: 700 }}>Cart</span>
                    <span className='ml-1 mt-6 mb-6' style={{ color: "#46474a" }}>({totalProducts} {totalProducts > 1 ? "items" : "item"})</span>
                </div>
                <div className='flex mb-4' style={{ fontSize: "1.5rem", height: "10%" }}>
                    <img loading="lazy" src="//i5.walmartimages.com/dfwrs/76316474-2775/k2-_3691ba8c-cbca-4439-9112-adb25c1b1803.v1.svg" width="32" height="32" alt="cart_gic_illustration" aria-hidden="true" />
                    <span className='text-black-700 font-bold ml-2' style={{ fontWeight: 700 }}>Pickup and delivery options</span>
                </div>
                <div className='flex' style={{ width: "100%", height: "90%" }}>
                    <div className='cartBox' style={{ width: "55%", height: "60%" }}>
                        <div className='flex flex-col sans-serif mb-6 br3-l ml-auto mr-auto justify-start items-centers' style={{ backgroundColor: "#f2f8fd", height: "23%" }}>
                            <div className='p-4 flex justify-start items-center'>
                                <img loading="lazy" src="//i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg" alt="fulfillment logo" width="64" height="64" class="db h-auto" />
                                <span className='mr-1 ml-2 text-black-700 font-bold' style={{ fontSize: "1.3rem" }}>Shipping, arriving {date}</span>
                            </div>
                        </div>
                        <div className='flex flex-col pl-4' style={{ height: "70%", overflowY: "scroll" }}>
                            <section>
                                <div className='flex flex-col sans-serif pb-2 pt-1'>
                                    <div className='flex flex-col justify-start items-start'>
                                        <span className='mt-1 mb-0 font-bold' style={{ color: "#46474a", fontSize: "0.855rem", lineHeight: "1.25" }}>Fulfilled by Walmart</span>
                                        <span className='mt-1 mb-0' style={{ color: "#004f9a", fontSize: "0.855rem", lineHeight: "1.25", fontWeight: "500" }}>Free shipping on orders over $35</span>
                                    </div>
                                    <ul className='flex flex-col justify-start items-start'>
                                        {products.map((product, index) => (
                                            <ProductCard key={index} price={product.price} desc={product.desc} decimal={product.decimal} image={product.img} />
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className='cartBox ml-12 relative bottom-7' style={{ width: "30%", height: "70%" }}>
                        <div class="p-3">
                            <button className="pt-0 pb-0 pr-6 pl-6 payClass" type="button" data-automation-id="checkout" id="Continue to checkout button">Buy Now</button>
                        </div>
                        <div className='flex p-3 items-center justify-start'>
                            <span className='text-white-700 font-bold mr-4'>Try On?</span>
                            <Dropdown options={options} onChange={handleSelectChange} value={selectedOption} placeholder="Select an option" />
                        </div>
                        <hr className='divider'/>
                        <div className='flex flex-col p-3'>
                            <div className='flex justify-between'>
                                <span className='font-bold text-black-700' style={{ color: "#2e2f32", fontWeight: 700 }}>Subtotal <span style={{ color: "#46474a", fontWeight: 500 }}>({totalProducts} {totalProducts > 1 ? "items" : "item"})</span></span>
                                <span className='font-bold' style={{ fontSize: "1.125rem", color: "#2a8703" }}>${totalPrice}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
