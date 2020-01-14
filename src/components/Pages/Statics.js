import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Media, Container, Col, Row } from 'react-bootstrap';
import { faCalendarAlt, faChartBar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Statics.css';
import logo from '../../images/logo.svg';


export default class Header extends Component {
  render() {
    return (
      <Media className="games pt-4 pb-5 ">
        <Container >
          <div>
            <Row>
              <Col><h1>"Estadísticas" </h1></Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs md lg="6" className="col-subtitle align-items-center"><h5>Tabla General</h5></Col>
              <Col xs md lg="2" className="col-subtitle align-items-center"><h5>JJ</h5></Col>
              <Col xs md lg="2" className="col-subtitle align-items-center"><h5>DG</h5></Col>
              <Col xs md lg="2" className="col-subtitle align-items-center"><h5>PTS</h5></Col>
            </Row>
            <div>
              <Row className="pt-3 pb-3 justify-content-center">
                <Col xs md lg="6" className="d-flex align-items-center justify-content-">
                  <h2>1</h2>
                  <img
                    alt="logo-venados-f-c"
                    src={logo}
                    width="80"
                    height="80"
                    className="mr-1 ml-1"
                  />{' '}
                  <h4>club_name</h4>
                </Col>
                <Col xs md lg="2" className="col-subtitle2 align-items-center"><h2>3</h2></Col>
                <Col xs md lg="2" className="col-subtitle2 align-items-center"><h2>3</h2></Col>
                <Col xs md lg="2" className="col-subtitle2 align-items-center"><h2>3</h2></Col>
              </Row>
            </div>
            <div>
              <Row className="pt-3 pb-3 justify-content-center">
                <Col xs md lg="6" className="d-flex align-items-center">
                  <h2>2</h2>
                  <img
                    alt="logo-venados-f-c"
                    src={logo}
                    width="80"
                    height="80"
                    className="mr-1 ml-1"
                  />{' '}
                  <h4>club_name</h4>
                </Col>
                <Col xs md lg="2" className="col-subtitle2 align-items-center"><h2>3</h2></Col>
                <Col xs md lg="2" className="col-subtitle2 align-items-center"><h2>3</h2></Col>
                <Col xs md lg="2" className="col-subtitle2 align-items-center"><h2>3</h2></Col>
              </Row>
            </div>
            <div>
              <Row className="pt-3 pb-3 justify-content-center">
                <Col xs md lg="6" className="d-flex align-items-center">
                  <h2>3</h2>
                  <img
                    alt="logo-venados-f-c"
                    src={logo}
                    width="80"
                    height="80"
                    className="mr-1 ml-1"
                  />{' '}
                  <h4>club_name</h4>
                </Col>
                <Col xs md lg="2" className="col-subtitle2 align-items-center"><h2>3</h2></Col>
                <Col xs md lg="2" className="col-subtitle2 align-items-center"><h2>3</h2></Col>
                <Col xs md lg="2" className="col-subtitle2 align-items-center"><h2>3</h2></Col>
              </Row>
            </div>
          </div>
        </Container>
      </Media>
    )
  }
}
