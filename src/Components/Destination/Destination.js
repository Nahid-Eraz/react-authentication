import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Gmap from '../Gmap/Gmap';
import './Destination.css'

const Destination = () => {
    return (
        <Container className="destination-container">
            <Row>
                <Col md={5}>
                    <div className='destination-input-box'>
                        <p>From</p>
                        <input type="text" name="From" id="1" />
                        <p>To</p>
                        <input type="text" name="To" id="2" />
                        <p>Date</p>
                        <input type="date" name="date" id="3"/>
                        <br/>
                        <br/>
                        <button>Search</button>
                    </div>
                </Col>
                <Col md={7}>
                    <Gmap></Gmap>
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;