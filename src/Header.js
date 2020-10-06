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
            {/* <h1 className="display-3 text-center brand mx-auto">j2Tech</h1> */}
            </ScrollAnimation>
{/*             <p className="display-5 lead text-justify">
            Small businesses often do not have the resources or budget to develop custom software. By leveraging new technologies such as cloud computing, I can bring low cost solutions to your business, leading to a first class customer experience and competative advantage in the market place.
            </p> */}
            </div>
            
{/*         <div className="form-row text-center">
          <div className="col 12">
          <ScrollAnimation animateIn='animate__fadeInLeft'>
            <a className="lead btn btn-secondary btn-lg" href="#" role="button">Request Quote</a>
         </ScrollAnimation>
          </div>
        </div> */}
        </Jumbotron>

    );
}



export default Header;