import React from 'react';
import { useContext } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { CategoryContext } from '../../App';
import './Home.css';

const Home = () => {
    const [category, setCategory] = useContext(CategoryContext);
    
    const setStatus= () => {
        console.log('click');
    }
    return (
        <div className="bg-image">
            <Container className="container">
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="https://img.freepik.com/free-vector/man-ride-naked-bike-cartoon-speed-motorcycle-illustration_261104-19.jpg?size=664&ext=jpg" />
                    <Card.Body>
                        <Card.Title>Bike</Card.Title>
                        <Button onClick={() => setCategory('Bike')} variant="primary">Select your ride</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="https://img2.pngio.com/sports-car-vector-motors-corporation-clip-art-png-1000x1000px-sports-car-vector-png-820_820.jpg" />
                    <Card.Body>
                        <Card.Title>Car</Card.Title>
                        <Button onClick={() => setCategory('Car')} variant="primary">Select your ride</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="https://cdna.artstation.com/p/marketplace/presentation_assets/000/187/396/large/file.jpg?1565777341" />
                    <Card.Body>
                        <Card.Title>Bus</Card.Title>
                        <Button onClick={() => setCategory('Bus')} variant="primary">Select your ride</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src="https://media.istockphoto.com/vectors/monochrome-pattern-for-design-with-retro-train-on-rails-vector-vector-id1062069668?k=6&m=1062069668&s=612x612&w=0&h=A1Cxu5waDVwNg5k2dnQ1iZ0dWZYFO6rTObo4Yxk3ioU=" />
                    <Card.Body>
                        <Card.Title>Train</Card.Title>
                        <Button onClick={() => setCategory('Train')} variant="primary">Select your ride</Button>
                    </Card.Body>
                </Card>
                <Button onClick={() => setStatus()}>Confirm to Go</Button>
            </Container>
        </div>
    );
};

export default Home;