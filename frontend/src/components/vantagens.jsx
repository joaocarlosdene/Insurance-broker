import React from "react";
import './vantagens.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Col, Container, Row } from "react-bootstrap";
import imgeconomia from '../assets/images/money.png'
import imgagilidade from '../assets/images/services2.png'
import imgcustomize from '../assets/images/services3.png'
import imgsolidez from '../assets/images/solidez.jpg'
import imgestrutura from '../assets/images/predio.jpg'
import imgprofissionais from '../assets/images/aperto-mao.jpg'

export default props =>
    <div className="vantagens">
         <Container>
            <Row>
                <Col className="col-12 text-center">
                <i className="fas fa-car-alt"></i>
                <h2 id="titulo1">Porque Escolher a Prime? </h2>
                <p className="sub-titulo">Neide é uma das principais corretoras da região e oferece condições especiais e diferenciadas pra você ou pra sua empresa.</p>
                </Col>
            </Row>
            <Row>
                <Col className="col-12 col-md-4 text-center service-box2">
                    <img src={imgeconomia} alt="money" />
                    <h4>Seguro Automóvel</h4>
                    <p>Operamos com as maiores seguradoras do mercado</p>
                </Col>
                <Col className="col-12 col-md-4 text-center service-box2">
                    <img src={imgagilidade} alt="clock" />
                    <h4>Seguro Automóvel</h4>
                    <p>Operamos com as maiores seguradoras do mercado</p>
                </Col>
                <Col className="col-12 col-md-4 text-center service-box2">
                    <img src={imgcustomize} alt="key" />
                    <h4>Seguro Automóvel</h4>
                    <p>Operamos com as maiores seguradoras do mercado</p>
                </Col>
            </Row>
            <Row>
                <Col className="col-12 col-md-4 text-center service-box2">
                    <img src={imgsolidez} alt="solidez" />
                    <h4>Seguro Automóvel</h4>
                    <p>Operamos com as maiores seguradoras do mercado</p>
                </Col>
                <Col className="col-12 col-md-4 text-center service-box2">
                    <img src={imgestrutura} alt="predio" />
                    <h4>Seguro Automóvel</h4>
                    <p>Operamos com as maiores seguradoras do mercado</p>
                </Col>
                <Col className="col-12 col-md-4 text-center service-box2">
                    <img src={imgprofissionais} alt="aperto-mao" />
                    <h4>Seguro Automóvel</h4>
                    <p>Operamos com as maiores seguradoras do mercado</p>
                </Col>
            </Row>
        </Container>
    </div>