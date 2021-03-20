import React from 'react';
import { useContext } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { CategoryContext } from '../../App';
import './Home.css';

const Home = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div className="bg-image">
            <Container className="container">
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Bike</Card.Title>
                        <Button onClick={() => setCategory()}variant="primary">Bike</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Car</Card.Title>
                        <Button onClick={() => setCategory()} variant="primary">Car</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Bus</Card.Title>
                        <Button onClick={() => setCategory()} variant="primary">Bus</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Train</Card.Title>
                        <Button onClick={() => setCategory()} variant="primary">Train</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Home;