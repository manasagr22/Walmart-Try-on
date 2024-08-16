import React from 'react'
import spinner from "../../assets/verify-loading.gif"
import "./Spinner.css";

export default function Spinner() {
    return (
        <div>
            <img src={spinner} alt='Loading...' id='imageID' />
        </div>
    )
}
