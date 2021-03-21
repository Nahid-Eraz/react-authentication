import React from 'react';
import { Button, Card } from 'react-bootstrap';

const RidingVehicle = (props) => {

    const { img, category } = props.ride;
    console.log(props.ride);

    return (
        <div>
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{category}</Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RidingVehicle;