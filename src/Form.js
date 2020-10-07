import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ScrollAnimation from 'react-animate-on-scroll'
import Jumbotron from 'react-bootstrap/Jumbotron'

import './App.css'


function About() {
    return (
        <>
            <Jumbotron className="App-header jumbotron-2" >
                <Row>
                    <Col >
                        <ScrollAnimation animateIn='animate__fadeInLeft'>
                                <h1 className="center display-4 p-text-blue">Leverage the power of the cloud</h1>
                        </ScrollAnimation>
                    </Col>
                    <Col lg={true}>
                        <ScrollAnimation animateIn="animate__fadeInRight">
                            <p className="p-text-blue" align="left">Small businesses do not have the resources or budget to develop custom software. By leveraging new technologies such as cloud computing, I can bring low cost solutions to your business, leading to a first class customer experience and competative advantage in the market place.</p>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Jumbotron>


            <Jumbotron className="App-header-2" >
                <ScrollAnimation animateIn='animate__fadeInDown'>
                    <h1 className="center display-4 ">Website Development</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInUp">
                    <p >Make a good first impression on potential customers with a professionally developed website.</p>
                </ScrollAnimation>
            </Jumbotron>


            <Jumbotron className="App-header jumbotron-2" >
                <ScrollAnimation animateIn='animate__fadeInLeft'>
                    <h1 className="center display-4 p-text-blue">Process Automation</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__fadeInRight'>
                     <p className="p-text-blue">Are you spending a lot of time on manual repetative tasks? Let's automate that work load so you can focus on what matters, your customers.</p>
                </ScrollAnimation>
            </Jumbotron>


            <Jumbotron className="App-header-2" >
            <Row>
                    <Col >
                        <ScrollAnimation animateIn='animate__fadeInLeft'>
                           
                                <h1 className="center display-4 ">Data Storage</h1>
                            
                        </ScrollAnimation>
                    </Col>
                    <Col lg={true}>
                        <ScrollAnimation animateIn="animate__fadeInRight">
                            <p  align="left">Does the thought of losing all your important business data due to a faulty hard drive keep you up at night? I can offer low cost data storage with built in redundency to ensure you never lose whats important to you.</p>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Jumbotron>





            <Jumbotron className="App-header jumbotron-2 p-text-blue" >
                <ScrollAnimation animateIn='animate__fadeInLeft'>
                    <h1 className="center display-4 p-text-blue">Request a quote</h1>
                </ScrollAnimation>
            </Jumbotron>
        </>
    )
}

export default About;