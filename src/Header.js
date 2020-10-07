import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Jumbotron from 'react-bootstrap/Jumbotron'
import "animate.css";

import './App.css'

function Header() {
    return (
        <Jumbotron className="App-header-2">
            <div className="jumboText form-row text-center ">
            <ScrollAnimation animateIn='animate__fadeInUp' animateOut="animate__fadeOutDown">
            <h1 className="display-3 text-center brand mx-auto"> &lt; j2Tech  /&gt;</h1>
            </ScrollAnimation>
            </div>
        </Jumbotron>

    );
}



export default Header;