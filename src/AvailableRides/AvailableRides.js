import React from 'react';
import { Card, Container } from 'react-bootstrap';

const AvailableRides = (props) => {
    const { img, category, charge, quantity } = props.ride;
    return (
        <Container>
            <Card style={{ width: '9rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Text>
                        <p>ok</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AvailableRides;