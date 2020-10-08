import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ScrollAnimation from 'react-animate-on-scroll'
import Jumbotron from 'react-bootstrap/Jumbotron'
import sections from './data/sectionContent'
import ContactForm from './Form'


const QuoteSection = ({title, body}) => {
    return (
        <Jumbotron className="App-header jumbotron-2">
        <ScrollAnimation animateIn='animate__fadeInLeft'>
            <h1 className="center display-4 p-text-blue" >
                {title}
            </h1>
        </ScrollAnimation>
        
    </Jumbotron>
    )
}

const BlueSection = ({title, body}) => {
    return (
        <Jumbotron className="App-header-2" >
            <ScrollAnimation animateIn='animate__fadeInDown'>
            <h1 className="center display-4 ">
                {title}
            </h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInUp">
            <p >
                {body}
            </p>
            </ScrollAnimation>
        </Jumbotron>
    )
}

const WhiteColSection = ({title, body}) => {
    return (
        <Jumbotron className="App-header jumbotron-2">
            <Row>
                <Col>
                    <ScrollAnimation animateIn='animate__fadeInLeft'>
                        <h1 className="center display-4 p-text-blue" >
                            {title}
                        </h1>
                    </ScrollAnimation>
                </Col>
                <Col lg={true}>
                    <ScrollAnimation animateIn="animate__fadeInRight">
                        <p className="p-text-blue" align="left">
                            {body}
                        </p>
                    </ScrollAnimation>
                </Col>
            </Row>
        </Jumbotron>
    )
}

function Sections () {
    return (
        <>
        <WhiteColSection title={sections.tagline.title} body={sections.tagline.body} />
        <BlueSection title={sections.web.title} body={sections.web.body} />
        <WhiteColSection title={sections.automation.title} body={sections.automation.body} />
        <BlueSection title={sections.data.title} body={sections.data.body} />
{/*         <QuoteSection title={sections.quote.title} /> */}
        <ContactForm />
        </>
    )
}

export default Sections;