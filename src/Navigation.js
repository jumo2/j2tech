import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './App.css'


function Navigation() {
    return (
        <Navbar className="mx-auto fluid" collapseOnSelect expand="lg">
            <Navbar.Brand className="brand mx-auto" href="#home">J2 Technology Solutions</Navbar.Brand>
        </Navbar>
    );
}



export default Navigation;