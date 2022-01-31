import React from "react";
import './parceiros.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Col, Container, Row } from "react-bootstrap";
import imgparceiros from '../assets/images/parceiros.jpg'

export default props =>
    <div className="parceiros">
        <Container>
            <Row>
                <Col className="col-12 text-center">
                <i className="fas fa-car-alt"></i>
                <h2 id="titulo">Principais Parceiros </h2>
                <p>trabalhamos com as melhores seguradoras do mercado <br/>
                    Confira:</p>
                <img src={imgparceiros} alt="" />
                </Col>
            </Row>
        </Container>
    </div>