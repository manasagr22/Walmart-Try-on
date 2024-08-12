import React from 'react'
import star from "../../assets/star.png"
import "./Card.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // Hollow Heart Icon
import FavoriteIcon from '@mui/icons-material/Favorite'; // Filled Heart Icon
import TryItNowCard from './TryItNowCard';

export default function Card(props) {
    return (
        <div class="max-w-sm bg-white rounded-lg pr-6">
            <div className="wishlist-icon">
                {props.isInWishlist ? (
                    <>
                        <FavoriteIcon className="filled-heart-icon" />
                        <div className="tooltip">Remove from Wishlist</div>
                    </>
                ) : (
                    <>
                        <FavoriteBorderIcon className="hollow-heart-icon" />
                        <div className="tooltip">Add to Wishlist</div>
                    </>
                )}
            </div>
            <a href="#">
                <img class="rounded-t-lg" src={props.image} alt="" style={{ height: "350px", width: "100%" }} />
            </a>
            <div className="p-5 pl-1">
                <div className='flex justify-between'>
                    <div>
                        <span className='text-black-700 font-bold' style={{ fontSize: "1rem", verticalAlign: "0.65ex" }}>$</span>
                        <span className='text-black-700 font-bold' style={{ fontSize: "1.4rem" }}>{props.price}</span>
                        <span className='text-black-700' style={{ fontSize: "1rem", verticalAlign: "0.65ex", fontWeight: 550 }}>{props.decimal}</span>
                    </div>
                    <div className='mt-1 w-fit gap-1 bg-clip-text text-xs opacity-100'>
                        <button className='flex' onClick={props.onTryItNow}>
                            <div className='h-6 w-6' style={{ display: "flex", alignItems: "flex-end" }}>
                                <img src={star} style={{ width: "28px", height: "25px" }} />
                            </div>
                            <span className='h-6 flex items-center text-sd-blue-500 bg-clip-text' style={{}}>Try Now</span>
                        </button>
                    </div>
                </div>
                <div className='flex'>
                    <span className='text-black-700 font-bold' style={{ fontWeight: "700", fontSize: ".875rem" }}>{props.type}</span>
                </div>
                <div className='flex mt-2 mb-4'>
                    <span className='text-black-700' style={{ fontSize: "1rem", color: "#2e2f32", textAlign: "left" }}>{props.desc}</span>
                </div>
                <div className='flex mb-2'>
                    <span className='text-black-700 sans-serif' style={{ fontSize: "0.80rem", color: "#2e2f32" }}>Shipping, arrives <span className='text-black-700' style={{ fontSize: "0.80rem", color: "#2e2f32", fontWeight: "800" }}>{props.date}</span></span>
                </div>
            </div>
        </div>
    )
}