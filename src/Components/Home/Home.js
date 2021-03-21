import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import ridesData from '../../Data/data.json';
import RidingVehicle from '../RidingVehicle/RidingVehicle';
import './Home.css';
const Home = () => {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        setRides(ridesData);
    }, [])
    return (
        <div className="bg-image">
            <Container className="ride-container">
                {
                    rides.map(ride => <RidingVehicle key={rides.category} ride={ride} ></RidingVehicle>)
                }
            </Container>
        </div>
    );
};

export default Home;