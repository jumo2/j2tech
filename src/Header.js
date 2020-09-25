import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

function Header() {
    return (
        <Jumbotron>
            <h1 className="display-4 text-center">Leverage the power of the cloud...</h1>
        <p className    ="lead text-justify">
          Small businesses often do not have the resources or budget
          to develop custom software. By leveraging new technologies such as 
          cloud computing, I can bring low cost solutions to your business, leading
          to a first class customer experience and competative advantage in the market place.
        </p>
        <div className="form-row text-center">
          <div className="col 12">
            <a className="btn btn-secondary btn-lg" href="#" role="button">Request Quote</a>
          </div>
        </div>
        </Jumbotron>

    );
}



export default Header;