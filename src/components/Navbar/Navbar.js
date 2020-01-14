import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { faHome, faChartBar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../images/logo.svg';
import './Navbar.css';


export default class Home extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand className="d-flex align-items-center" componentClass={Link} href="/" to="/">
            <img
              alt="logo-venados-f-c"
              src={logo}
              width="40"
              height="40"
              className="mr-2"
            />{' '}
            <h5 className="d-flex aling-items-center aling-self-center justify-content-center">VENADOS F.C.</h5>
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" >
            <Nav>
              <Nav.Link componentClass={Link} href="/" to="/"><FontAwesomeIcon className="pr-1" icon={faHome} />Inicio</Nav.Link>
              <Nav.Link componentClass={Link} href="/statics" to="/statics"><FontAwesomeIcon className="pr-1" icon={faChartBar} />Estadísticas</Nav.Link>
              <Nav.Link componentClass={Link} href="/" to="/"><FontAwesomeIcon className="pr-1" icon={faUsers} />Jugadores</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
