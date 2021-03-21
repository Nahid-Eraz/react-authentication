import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Destination.css'

const Destination = () => {
    const { category } = useParams();
    return (
        <Container>
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
                    <img src='' alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;