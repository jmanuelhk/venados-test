import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import copaLogo from '../../images/Copa_MX.svg';
import ascensoLogo from '../../images/ascenso-mx-logo.png';
import './Home.css'
import Media from './Media'

export default class Home extends Component {
	render() {
		return (
			<div>
				<Container>
					<Row className="show-Container text-center" id="pricing">
						<Col xs={12} sm={6} md={6} lg={6} className="person-wrapper">
							<Card className="pt-4 card">
								<Card.Img style={{ height: 150, width: 200, justifyContent: "center", alignSelf: "center" }} variant="top" src={copaLogo} />
								<Card.Body>
									<Card.Title>Tabla de partidos</Card.Title>
									<Button >Ver</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} sm={6} md={6} lg={6} className="person-wrapper">
							<Card className="pt-4" >
								<Card.Img style={{ height: 150, width: 200, justifyContent: "center", alignSelf: "center" }} variant="top" src={ascensoLogo} />
								<Card.Body>
									<Card.Title>Tabla de partidos</Card.Title>
									<Button >Ver</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
					<Media />
			</div>
			
		);
	}
}
