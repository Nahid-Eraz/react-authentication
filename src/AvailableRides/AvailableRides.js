import React from 'react';

const AvailableRides = (props) => {
    const {img, category, charge} = props.ride;
    return (
        <div>
            <h2>Item</h2>
            <p>{category}</p>
            <p>$ {charge}</p>
        </div>
    );
};

export default AvailableRides;