import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './App.css'

function Header() {
    return (
        <Jumbotron>
            <div className="jumboText form-row text-center ">
            <h1 className="display-4 text-center">Leverage the power of the cloud...</h1>
            <p className="my-4 lead text-justify">
            Small businesses often do not have the resources or budget to develop custom software. By leveraging new technologies such as cloud computing, I can bring low cost solutions to your business, leading to a first class customer experience and competative advantage in the market place.
            </p>
            </div>
            
        <div className="form-row text-center">
          <div className="col 12">
            <a className="lead btn btn-secondary btn-lg" href="#" role="button">Request Quote</a>
          </div>
        </div>
        </Jumbotron>

    );
}



export default Header;