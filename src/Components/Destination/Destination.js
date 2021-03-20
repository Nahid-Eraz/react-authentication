import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CategoryContext } from '../../App';
import AvailableRides from '../../AvailableRides/AvailableRides';
import ridesData from '../../Data/data.json';
import mapImage from '../../images/Map.png'

const Destination = () => {
    const [category] = useContext(CategoryContext);
    const [rides, setRides] = useState([]);
    useEffect(() => {
        const matchedRides = ridesData.filter(rd => rd.category.toLowerCase() === category.toLowerCase());
        setRides(matchedRides);
    }, [category])
    return (
        <Container>
            <Row>
                <Col md={5}>
                    {
                        rides.map(rd => <AvailableRides ride={rd} key={rides.id}></AvailableRides>)
                    }
                </Col>
                <Col md={7}>
                    <img src={mapImage} alt=""/>
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;