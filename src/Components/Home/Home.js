import React from 'react';
import { useContext } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { CategoryContext } from '../../App';
import './Home.css';

const Home = () => {
    const [category, setCategory] = useContext(CategoryContext);
    
    const showDetails= () => {
        console.log('click');
    }
    return (
        <div className="bg-image">
            <Container className="container">
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="https://img.freepik.com/free-vector/man-ride-naked-bike-cartoon-speed-motorcycle-illustration_261104-19.jpg?size=664&ext=jpg" />
                    <Card.Body>
                        <Card.Title>Bike</Card.Title>
                        <Button onClick={() => setCategory('Bike')} onClick={() => showDetails()}variant="primary">Bike</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="https://img2.pngio.com/sports-car-vector-motors-corporation-clip-art-png-1000x1000px-sports-car-vector-png-820_820.jpg" />
                    <Card.Body>
                        <Card.Title>Car</Card.Title>
                        <Button onClick={() => setCategory('Car')} variant="primary">Car</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="https://cdna.artstation.com/p/marketplace/presentation_assets/000/187/396/large/file.jpg?1565777341" />
                    <Card.Body>
                        <Card.Title>Bus</Card.Title>
                        <Button onClick={() => setCategory('Bus')} variant="primary">Bus</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="https://www.formfonts.com/files/1/12762/generic-speed-train-track-gauge-1435_FF_Model_ID12762_1_GEN_RR100_1_00.jpg" />
                    <Card.Body>
                        <Card.Title>Train</Card.Title>
                        <Button onClick={() => setCategory('Train')} variant="primary">Train</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Home;