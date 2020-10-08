import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ScrollAnimation from 'react-animate-on-scroll'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './App.css'



function QuoteForm() {
    return (
        <Form>
            <Form.Group>
                <Form.Row>
                    <Form.Label for="inputName">Name</Form.Label>
                <Form.Control className="col-sm-10" type="text" id="inputName" placeholder="Whats your name?"></Form.Control>
                </Form.Row>
            </Form.Group>
            <Form.Group>
                <Form.Row>
                    <Form.Label for="inputEmail">Email</Form.Label>
                <Form.Control className="col-sm-10" type="emaik" id="inputEmail" placeholder="Whats your email address?"></Form.Control>
                </Form.Row>
            </Form.Group>
        </Form>
    )
}

function ContactForm () {
    return (
        <Jumbotron className="App-header jumbotron-2 p-text-blue">
            <Row>
                <Col>
                    <ScrollAnimation animateIn='animate__fadeInLeft'>
                        <h1 className="center display-4 p-text-blue" >
                            Contact: 
                        </h1>
                    </ScrollAnimation>
                </Col>
                <Col lg={true}>
                    <ScrollAnimation animateIn="animate__fadeInRight">
        <Form>
            <Form.Group>
                <Form.Row>
                    <Form.Label htmlFor="inputName">Name</Form.Label>
                    <Form.Control  type="text" id="inputName" placeholder="j2Tech"></Form.Control>
                </Form.Row>
            </Form.Group>
            <Form.Group>
                <Form.Row>
                    <Form.Label htmlFor="inputEmail">Email</Form.Label>
                    <Form.Control  type="email" id="inputEmail" placeholder="j2tech@example.com"></Form.Control>
                </Form.Row>
            </Form.Group>
            <Form.Group>
                <Form.Row>
                    <Form.Label htmlFor="inputMessage">Message</Form.Label>
                    <Form.Control as="textarea" id="inputMessage" placeholder="What can I help you with?"></Form.Control>
                </Form.Row>
            </Form.Group>
            <Form.Row>
            <Button className="submit-button" type="submit" size="lg">Send</Button>
            </Form.Row>
        </Form>
                    </ScrollAnimation>
                </Col>
            </Row>
        </Jumbotron>
    )
}

export default ContactForm;