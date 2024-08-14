import React from 'react'

export default function ProductCard(props) {
    return (
        <div className='flex mb-4' style={{ width: "100%" }}>
            <img src={props.image} height={96} width={96} />
            <div className='flex flex-col justify-start items-start ml-4' style={{ width: "55%" }}>
                <span style={{ color: "#46474a", fontSize: "1rem", fontWeight: 400, textAlign: "left" }}>{props.desc}</span>
                <span className='mt-2' style={{ color: "#74767c", fontSize: "0.875" }}>Clothing Size: M</span>
                <div className='flex items-center mt-4 mb-1' style={{ color: "#46474a", fontSize: "0.875" }}>
                    <img loading="lazy" src="//i5.walmartimages.com/dfw/63fd9f59-e685/7e6c8c3a-3ba7-437a-a066-de3ad3a6a15a/v1/roundReturn.svg" width="16" height="16" alt="" class="mr1" />
                    <span className='pr-0' style={{ color: "#2e2f32" }}>Free 90-day returns</span>
                </div>
            </div>
            <div className='flex justify-end items-start pr-4 font-bold' style={{ width: "25%", fontSize: "1.125rem", color: "#2a8703" }}>
                <p>${props.price}.{props.decimal}</p>
            </div>
        </div>
    )
}
