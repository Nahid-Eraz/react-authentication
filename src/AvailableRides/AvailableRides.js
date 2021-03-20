import React from 'react';
import { Card, Container } from 'react-bootstrap';

const AvailableRides = (props) => {
    const { img, category, charge, quantity } = props.ride;
    return (
        <Container>
            <Card style={{ width: '8rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Text>
                        <p>Ride: {category}</p>
                        <p>Capacity: {quantity}</p>
                        <p>$ {charge}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AvailableRides;