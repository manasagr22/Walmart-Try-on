import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./Domain.css"
import DomainElements from './DomainElements';

export default function Domain() {
    const arr = ["Departments", "Brand", "Price", "Fulfilment Speed", "Subscription", "Availability", "Product Category", "Clothing Size Group", "Clothing Size", "Multipack Quantity", "Special Offers", "Customer Rating", "Retail"];
    return (
        <div className='domainContainer flex-grow-0 flex-shrink-0'>
            <section className='domainSection overflow-y-auto overflow-x-hidden'>
                <div className='pb-12 pr-4'>
                    {arr.map((element, index) => (
                        <DomainElements key={index} element={element}/>
                    ))}
                </div>
            </section>
        </div>
    )
}
