import React from "react";
import './ajuda.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Col, Container, Row } from "react-bootstrap";
import imgcontact from '../assets/images/contact.png'

export default props =>
    <div className="ajuda"> 
        <Container>
            <Row>
                <Col className="col-12 col-md-8">
                    <h5>Tem alguma dúvida ou precisa de ajuda?</h5>
                    <p>Nossa equipe está sempre disposta a resolver seus problemas entre em contato conosco. Confira nossas unidades:</p>
                </Col>
            </Row>
            <Row className="ajuda1">
                <Col className="col-12 col-md-8">
                    <h5>Segunda à Sexta das 8h as 18h.</h5>
                    <a href="#">Confira todas unidades</a>
                </Col>
                <Col className="col12 col-md-4">
                    <img className="img-ajuda" src={imgcontact} alt="" />
                </Col>
            </Row>
        </Container>
    </div>