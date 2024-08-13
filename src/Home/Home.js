import React from 'react'
import Domain from './Domain/Domain'
import Main from './Main/Main'
import ProductDetail from './Product/ProductDetail'

export default function Home(props) {
  return (
    <div className='flex flex-column h-full'>
        <div className='w-full relative-m pl-6 pr-6 flex pt-2'>
            <Domain/>
            <Main cartItems={props.cartItems} setCartItems={props.setCartItems}/>
        </div>
    </div>
  )
}
