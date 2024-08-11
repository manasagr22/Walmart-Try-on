import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import './AddressCard.css'; // Create this CSS file to style the AddressCard

const AddressCard = ({ address }) => {
    return (
        <div className='address-card'>
            <p className='address-text'>{address}</p>
            <div className='address-card-icons'>
                <EditIcon className='edit-icon' />
            </div>
        </div>
    );
};

export default AddressCard;
