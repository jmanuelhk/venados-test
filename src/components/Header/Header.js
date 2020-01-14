import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <Container className="cstm-cont" fluid={true}>
        <Jumbotron className="jumbo">
          {/* <h1>VENADOS F.C.</h1>
          <p>This is how to build a website with React, React-Router & React-Bootstrap</p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link> */}
        </Jumbotron>
      </Container>
    )
  }
}
