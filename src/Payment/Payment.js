import React, { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, CircularProgress, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Select, MenuItem, InputLabel } from '@mui/material';
import ProductCard from '../Home/Card/ProductCard';
import logo from '../assets/logo2.png'; // Imported logo
import walmartPlusLogo from '../assets/walmart-plus.png'; // Import Walmart+ logo
import upiLogo from '../assets/Payment_logo/upi.png'; // Add logo for UPI
import paypalLogo from '../assets/Payment_logo/paypal.png'; // Add logo for PayPal
import creditCardLogo from '../assets/Payment_logo/card.png'; // Add logo for Credit Card
import netBankingLogo from '../assets/Payment_logo/bank.png'; // Add logo for Net Banking
import cashLogo from '../assets/Payment_logo/cash.png'; // Add logo for Cash
import './Payment.css';

export default function Payment(props) {
    const date = "in 2 days";

    const [totalProducts, setTotalProducts] = useState(props.cartItems.length);
    const [totalPrice, setTotalPrice] = useState(0.0);
    const [total, setTotal] = useState(0.0);
    const options = ["Select an option", "Yes", "No"];
    const paymentMethods = [
        { label: "UPI", value: "UPI", logo: upiLogo },
        { label: "PayPal", value: "PayPal", logo: paypalLogo },
        { label: "Credit/Debit Card", value: "Credit/Debit Card", logo: creditCardLogo },
        { label: "Net Banking", value: "Net Banking", logo: netBankingLogo },
        { label: "Cash", value: "Cash", logo: cashLogo }
    ];
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const [openPopup, setOpenPopup] = useState(false);
    const [loading, setLoading] = useState(false);
    const [paymentSuccessful, setPaymentSuccessful] = useState(false);

    useEffect(() => {
        if (totalPrice === 0.0) {
            let price = 0.0;
            props.cartItems.forEach((product) => {
                price += parseFloat(`${product.price}.${product.decimal}`);
            });
            setTotalPrice(price);
            setTotal(price);
        }
    }, [totalPrice, total]);

    useEffect(() => {
        if (selectedOption === "Yes") {
            setTotalPrice((total / 2).toFixed(2));
        } else {
            setTotalPrice(total);
        }
    }, [selectedOption, total]);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const handleBuyNowClick = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
        setPaymentSuccessful(false); // Reset successful payment state
    };

    const handleConfirm = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setPaymentSuccessful(true);
            setOpenPopup(false); // Close the confirmation popup
        }, 3000); // 3 seconds loading
    };
    return (
        <div className='payment-container'>
            <div className='content-container'>
                {/* Existing Content */}
                <div className='flex' style={{ fontSize: "1.5rem", height: "12%" }}>
                    <span className='font-bold mt-6 mb-6 justify-start items-start' style={{ color: "#2e2f32", fontWeight: 700 }}>Cart</span>
                    <span className='ml-1 mt-6 mb-6' style={{ color: "#46474a" }}>({totalProducts} {totalProducts > 1 ? "items" : "item"})</span>
                </div>
                <div className='flex mb-4' style={{ fontSize: "1.5rem", height: "10%" }}>
                    <img loading="lazy" src="//i5.walmartimages.com/dfwrs/76316474-2775/k2-_3691ba8c-cbca-4439-9112-adb25c1b1803.v1.svg" width="32" height="32" alt="cart_gic_illustration" aria-hidden="true" />
                    <span className='text-black-700 font-bold ml-2' style={{ fontWeight: 700 }}>Pickup and delivery options</span>
                </div>

                <div className='main-grid'>
                    <div className='shipping-card'>
                        <div className='shipping-info'>
                            <img loading="lazy" src="//i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg" alt="fulfillment logo" width="64" height="64" />
                            <span className='shipping-text'>Shipping, arriving {date}</span>
                        </div>
                        <div className='product-list'>
                            {props.cartItems.map((product, index) => (
                                <ProductCard key={index} price={product.price} desc={product.desc} decimal={product.decimal} image={product.img} />
                            ))}
                        </div>
                    </div>
                    <div className='side-cards'>
                        <div className='summary-box'>
                            <button
                                className="pay-button"
                                type="button"
                                onClick={handleBuyNowClick}
                                disabled={!selectedPaymentMethod} // Disable button if no payment method is selected
                            >
                                Buy Now
                            </button>
                            <div className='try-on'>
                                <FormControl fullWidth>
                                    <InputLabel>Try On?</InputLabel>
                                    <Select
                                        value={selectedOption}
                                        onChange={handleSelectChange}
                                        label="Try On?"
                                    >
                                        {options.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='payment-method'>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Choose Payment Method</FormLabel>
                                    <RadioGroup value={selectedPaymentMethod} onChange={handlePaymentMethodChange}>
                                        <div className='payment-method-grid'>
                                            {paymentMethods.map((method) => (
                                                (selectedOption === "Yes" && (method.value === "PayPal" || method.value === "Credit/Debit Card")) || selectedOption !== "Yes" ? (
                                                    <FormControlLabel
                                                        key={method.value}
                                                        value={method.value}
                                                        control={<Radio disabled={selectedOption === "Yes" && method.value !== "Credit/Debit Card" && method.value !== "PayPal"} />}
                                                        label={
                                                            <div className='payment-method-option'>
                                                                <img src={method.logo} alt={method.label} className='payment-method-logo' />
                                                                <span className='payment-method-label'>{method.label}</span>
                                                            </div>
                                                        }
                                                    />
                                                ) : null
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <hr className='divider'/>
                            <div className='price-summary'>
                                <div className='summary-item'>
                                    <span className='summary-label'>Subtotal <span className='item-count-summary'>({totalProducts} {totalProducts > 1 ? "items" : "item"})</span></span>
                                    <span className='summary-value'>${totalPrice}</span>
                                </div>
                                <div className='summary-item'>
                                    <span className='summary-label'>Shipping:</span>
                                    <span className='summary-value'>Free</span>
                                </div>
                                {/* <div className='summary-item'>
                                    <span className='summary-label'>Taxes:</span>
                                    <span className='summary-value'>Calculated at checkout</span>
                                </div> */}
                                <hr className='divider'/>
                                <div className='summary-item'>
                                    <span className='summary-label estimated-total'>Estimated Total:</span>
                                    <span className='summary-value estimated-value'>${totalPrice}</span>
                                </div>
                                <div className='affirm-info'>
                                    <span className='affirm-text'>As low as <span className='highlight-text'>$2/mo</span></span>
                                    <img src={logo} alt="Affirm Logo" className="logo" />
                                </div>
                            </div>
                        </div>
                        {/* <div className='walmart-plus-card'>
                            <img src={walmartPlusLogo} alt="Walmart+ Logo" className='walmart-plus-logo' />
                            <div className='walmart-plus-info'>
                                <span className='walmart-plus-title'>Get Free Delivery with Walmart+</span>
                                <span className='walmart-plus-details'>Add Walmart+ to your cart for free delivery</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Popup for Confirming Payment */}
            <Dialog open={openPopup} onClose={handleClosePopup}>
                <DialogTitle>Confirm Your Order</DialogTitle>
                <DialogContent>
                    {loading ? (
                        <div className="loading-container">
                            <CircularProgress />
                        </div>
                    ) : (
                        <div>
                            <p>Are you sure you want to place this order?</p>
                            <p>Payment Method: {selectedPaymentMethod}</p>
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClosePopup} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleConfirm}
                        color="primary"
                        disabled={loading}
                    >
                        {loading ? "Processing..." : "Confirm"}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Success Popup */}
            {paymentSuccessful && (
                <Dialog open={paymentSuccessful} onClose={() => setPaymentSuccessful(false)}>
                    <DialogTitle>Payment Successful</DialogTitle>
                    <DialogContent>
                        <p>Thank you for your purchase!</p>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setPaymentSuccessful(false)} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
}
