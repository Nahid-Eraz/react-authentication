import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';
import AvailableRides from '../../AvailableRides/AvailableRides';
import ridesData from '../../Data/data.json';

const Destination = () => {
    const [category] = useContext(CategoryContext);
    const [rides, setRides] = useState([]);
    useEffect(() => {
        const matchedRides = ridesData.filter(rd => rd.category.toLowerCase() === category.toLowerCase());
        setRides(matchedRides);
    }, [category])
    return (
        <div>
            <h1>this is destination</h1>
            {
                rides.map(rd => <AvailableRides ride = {rd}></AvailableRides>)
            }
        </div>
    );
};

export default Destination;