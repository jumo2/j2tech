import React from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation'
import Header from './Header'
import Services from './Services'
import Footer from './Footer'
import './App.css'


const App = () => (
  <Container className="container-sm">
    <Navigation />
    <Header />
    <Services />
    <Footer />
  </Container>
);

export default App;
