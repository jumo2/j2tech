import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ScrollAnimation from 'react-animate-on-scroll'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

import './App.css'



class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ' ',
            email: ' ',
            message: ' '
        }
    }



    handleSubmit(e){
        e.preventDefault();

         fetch('https://x0krkfgex3.execute-api.us-east-1.amazonaws.com/prod/', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Access-Control-Allow-Origin': 'https://j2tech.xyz/',
                'Accept': "application/json",
                'Content-Type': 'application/json',
                'x-api-key': 'R80ARBeFIg3dJgXbs2Esk4WgGdgTk9PW3nYlq1Bb'
            },
        }).then(
            /* (response) => (response.json()) */
            (response) => (console.log(response))
        ).then((response) => {
            if (response.status === '200'){
                alert("Message Sent.");
                this.resetForm()
            }else if (response.status === 'fail'){
                alert("Message failed to send.")
            }
        }) 

        
    }

    alertSuccess(value){
        return(
                <Alert varient="Success" show={true}>HI</Alert>
            
        )
    }

    resetForm(){
        this.setState({name: ' ', email: ' ', message: ' '})
    }

    render() {
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
        <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <Form.Group>
                <Form.Row>
                    <Form.Label htmlFor="inputName">Name</Form.Label>
                    <Form.Control  type="text" id="inputName" value={this.state.name} onChange={this.onNameChange.bind(this)}></Form.Control>
                </Form.Row>
            </Form.Group>
            <Form.Group>
                <Form.Row>
                    <Form.Label htmlFor="inputEmail">Email</Form.Label>
                    <Form.Control  type="email" id="inputEmail" value={this.state.email} onChange={this.onEmailChange.bind(this)}></Form.Control>
                </Form.Row>
            </Form.Group>
            <Form.Group>
                <Form.Row>
                    <Form.Label htmlFor="inputMessage">Message</Form.Label>
                    <Form.Control as="textarea" id="inputMessage" value={this.state.message} onChange={this.onMessageChange.bind(this)}></Form.Control>
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
        );
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event){
        this.setState({message: event.target.value})
    }

    



}

/* function ContactForm () {
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
} */

export default ContactForm;