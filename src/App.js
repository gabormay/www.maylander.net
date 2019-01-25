import React, { Component } from 'react';
import './App.css';

import { Container, Row, Col } from 'reactstrap';
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Navbar comes here */}
        <Container>
          <Routes />
        </Container>
        <hr/>
        <Container className="mb-3" >
          <Row>
            <Col sm="6">
              <small>maylander.net - The homepage of the Mayländer Family</small>
            </Col>
            <Col sm="6">
              <div  className="float-right">
                {/* eslint-disable-next-line */}
                <small><a href="#" target="_blank">link to source <span className="oi oi-external-link"></span></a></small>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
