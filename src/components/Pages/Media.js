import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
import { Media, Container, Col, Row } from 'react-bootstrap';
import { faCalendarAlt, faChartBar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Media.css';
import logo from '../../images/logo.svg';


export default class Header extends Component {
  render() {
    return (
      <Media className="games pt-4 mt-5 pb-5 mb-5">
        <Container >
          <div>
            <Row>
              <Col><h1>"liga_name" </h1></Col>
            </Row>
            <Row>
              <Col className="col-subtitle"><h5>mes_juegos</h5></Col>
            </Row>
            <Row className="pt-3">
              <Col className="d-flex justify-content-center align-items-center">
                <div>
                  <FontAwesomeIcon className="fa-3x" icon={faCalendarAlt} />
                  <h4>fecha_game</h4>
                </div>
              </Col>
              <Col>
                <div>
                  <img
                    alt="logo-venados-f-c"
                    src={logo}
                    width="100"
                    height="100"
                    className="mr-2"
                  />{' '}
                  <h4>club_name</h4>
                </div>
              </Col>
              <Col className="d-flex justify-content-center align-items-center"><h1>3 - 3</h1></Col>
              <Col>
                <div>
                  <img
                    alt="logo-venados-f-c"
                    src={logo}
                    width="100"
                    height="100"
                    className="mr-2"
                  />{' '}
                  <h4>club_name</h4>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="col-subtitle"><h5>mes_juegos</h5></Col>
            </Row>
            <Row className="pt-3">
              <Col className="d-flex justify-content-center align-items-center">
                <div>
                  <FontAwesomeIcon className="fa-3x" icon={faCalendarAlt} />
                  <h4>fecha_game</h4>
                </div>
              </Col>
              <Col>
                <div>
                  <img
                    alt="logo-venados-f-c"
                    src={logo}
                    width="100"
                    height="100"
                    className="mr-2"
                  />{' '}
                  <h4>club_name</h4>
                </div>
              </Col>
              <Col className="d-flex justify-content-center align-items-center"><h1>3 - 3</h1></Col>
              <Col>
                <div>
                  <img
                    alt="logo-venados-f-c"
                    src={logo}
                    width="100"
                    height="100"
                    className="mr-2"
                  />{' '}
                  <h4>club_name</h4>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="col-subtitle"><h5>mes_juegos</h5></Col>
            </Row>
            <Row className="pt-3">
              <Col className="d-flex justify-content-center align-items-center">
                <div>
                  <FontAwesomeIcon className="fa-3x" icon={faCalendarAlt} />
                  <h4>fecha_game</h4>
                </div>
              </Col>
              <Col>
                <div>
                  <img
                    alt="logo-venados-f-c"
                    src={logo}
                    width="100"
                    height="100"
                    className="mr-2"
                  />{' '}
                  <h4>club_name</h4>
                </div>
              </Col>
              <Col className="d-flex justify-content-center align-items-center"><h1>3 - 3</h1></Col>
              <Col>
                <div>
                  <img
                    alt="logo-venados-f-c"
                    src={logo}
                    width="100"
                    height="100"
                    className="mr-2"
                  />{' '}
                  <h4>club_name</h4>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Media>
    )
  }
}
