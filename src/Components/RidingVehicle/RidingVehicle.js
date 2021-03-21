import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const RidingVehicle = (props) => {

    const { img, category } = props.ride;
    const history = useHistory();
    const handleDestination=  (category) => {
        history.push(`/destination/${category}`);
    }

    return (
        <div onClick={() => handleDestination(category)}>
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{category}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RidingVehicle;