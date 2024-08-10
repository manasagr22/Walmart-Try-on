import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../assets/logo.jpg"
import logo1 from "../assets/logo1.png"
import roundedSquares from "../assets/roundedSquares.png"
import { ADDRESS_PLACEHOLDER_TEXT, ADDRESS_TEXT, PLACEHOLDER_TEXT } from '../Constants/constants'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SideNav from '../Home/Cart/SideNav';
import cartimg from '../assets/cart_sample1.jpg'

export default function Navbar() {
    const [itemCount, setItemCount] = useState(0);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false); // State to manage SideNav visibility
    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };

    const cartItems = [
        {
            id: 1,
            image: cartimg,
            deliveryDate: "Delivery by: Aug 15, 2024",
            cost: 1500
        }
    ];

    return (
        <div className='navbar'>
            <header className='flex items-center justify-evenly pa3' style={{ height: "80px" }}>
                <img className="imgLogo" src={logo} alt='logo' />
                <div style={{ height: "64%", width: "17%", position: "relative", display: "flex" }}>
                    <img className="addressLogo" src={logo1} alt='logo' />
                    <div className='addressClass'>
                        <div className='addressContainer font-sm'>
                            <p className='text-white font-bold'>{ADDRESS_PLACEHOLDER_TEXT}</p>
                            <p className='text-white'>{ADDRESS_TEXT}</p>
                        </div>
                    </div>
                    <KeyboardArrowDownIcon sx={{ color: "white", position: "absolute", right: "6px", top: "13px" }} />
                </div>
                <div style={{ height: "64%", width: "60%", position: "relative" }}>
                    <input type='search' className='inputClass' placeholder={PLACEHOLDER_TEXT} />
                    <button type='button' className='search'>
                        <SearchIcon sx={{ color: 'white' }} />
                    </button>
                </div>
                <div className='Account'>
                    <div className='flex justify-center items-center'>
                        <FavoriteBorderIcon sx={{ color: "white", fontWeight: "21px" }} />
                        <div className='flex-col' style={{ marginLeft: "5px" }}>
                            <p className='text-white size'>Reorder</p>
                            <p className='text-white font-bold'>My Items</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <PermIdentityIcon sx={{ color: "white", fontWeight: "21px" }} />
                        <div className='flex-col' style={{ marginLeft: "5px" }}>
                            <p className='text-white size'>Sign In</p>
                            <p className='text-white font-bold'>Account</p>
                        </div>
                    </div>
                    <div className='flex-col justify-center items-center'>
                        <div className='relative'>
                        <AddShoppingCartIcon sx={{ color: 'white', fontWeight: '21px' }} onClick={toggleSideNav} />
                        <div className='itemCount'>{itemCount}</div>
                        </div>
                        <p className='text-white size'>$0.00</p>
                    </div>
                </div>
            </header>
            <div className='navbarChild flex items-center header-navigation ph4'>
                <div className='flex items-center justify-center align-center'>
                    <nav className='flex'>
                        <ul className='flex flex-row pa0 ma0 list'>
                            <li style={{ paddingRight: "2px", paddingLeft: "2rem" }}>
                                <div className='itemClass flex relative'>
                                    <img width="20" height="20" src="https://img.icons8.com/fluency-systems-regular/48/four-squares.png" alt="four-squares" />
                                    <p className='font-bold' style={{ color: "#002d58" }}>Departments</p>
                                </div>
                            </li>
                            <li style={{ paddingRight: "2px", paddingLeft: "2rem" }}>
                                <div className='itemClass flex relative'>
                                    <img width="20" height="20" src="https://img.icons8.com/fluency-systems-regular/48/four-squares.png" alt="four-squares" />
                                    <p className='font-bold' style={{ color: "#002d58" }}>Services</p>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div class="flex ph-2 items-center mr-6 ml-6" style={{ color: "#0071dc" }}>|</div>
                    <nav className='flex'>
                        <ul className='sub-nav-link-container flex list pa0 ma0 f6 overflow-hidden flex-wrap cg-2' style={{ height: "20px", gap: "1.7rem" }}>
                            <li><a link-identifier="Fall Savings" class="no-underline sub-nav-link white ph2 navy redesign-sub-nav-link-focus flex" href="https://www.walmart.com/shop/savings">Fall Savings</a></li>
                            <li><a link-identifier="Grocery & Essentials" class="no-underline sub-nav-link white ph2 navy redesign-sub-nav-link-focus flex" href="https://www.walmart.com/cp/groceries-essentials/1735450">Grocery & Essentials</a></li>
                            <li><a link-identifier="Back To School" class="no-underline sub-nav-link white ph2 navy redesign-sub-nav-link-focus flex" href="https://www.walmart.com/cp/school-supplies/1086045">Back To School</a></li>
                            <li><a link-identifier="College Essentials" class="no-underline sub-nav-link white ph2 navy redesign-sub-nav-link-focus flex" href="https://www.walmart.com/cp/dorm-room-essentials/1225229">College Essentials</a></li>
                            <li><a link-identifier="Home" class="no-underline sub-nav-link white ph2 navy redesign-sub-nav-link-focus flex" href="https://www.walmart.com/cp/home/4044">Home</a></li>
                            <li><a link-identifier="Electronics" class="no-underline sub-nav-link white ph2 navy redesign-sub-nav-link-focus flex" href="https://www.walmart.com/cp/electronics/3944">Electronics</a></li>
                            <li><a link-identifier="Fashion" class="no-underline sub-nav-link white ph2 navy redesign-sub-nav-link-focus flex" href="https://www.walmart.com/cp/clothing/5438">Fashion</a></li>
                            <li><a link-identifier="Baby" class="no-underline sub-nav-link white ph2 navy redesign-sub-nav-link-focus flex" href="https://www.walmart.com/cp/baby-products/5427">Baby</a></li>
                            <li><a link-identifier="Auto" class="no-underline sub-nav-link white ph2 navy redesign-sub-nav-link-focus flex" href="https://www.walmart.com/cp/auto-tires/91083">Auto</a></li>
                            <li><a link-identifier="Registry" class="no-underline sub-nav-link white ph2 navy redesign-sub-nav-link-focus flex" href="https://www.walmart.com/cp/gifts-registry/1094765">Registry</a></li>
                            <li><a link-identifier="ONE Debit" class="no-underline sub-nav-link white ph2 navy redesign-sub-nav-link-focus flex" href="https://www.walmart.com/cp/3747098?utm_content=WMD-HPG-GBNA">ONE Debit</a></li>
                            <li><a link-identifier="Walmart+" class="no-underline sub-nav-link white ph2 navy redesign-sub-nav-link-focus flex" href="https://www.walmart.com/plus">Walmart+</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <SideNav isOpen={isSideNavOpen} onClose={toggleSideNav} cartItems={cartItems}/>
        </div>
    )
}