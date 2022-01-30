import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './slider.css'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../assets/images/caminhao.jpg'
import img2 from '../assets/images/casa.png'
import img3 from '../assets/images/auto1.jpg'


export default props =>
<Carousel className="Tamanho-carousel">
    <Carousel.Item>
        <img 
        className="d-block w-100"
        style={{height: 480}}
        src={img1} alt="caminhao" />
    <Carousel.Caption>
    <div class="carousel-caption d-none d-md-block">
        <h2>Seguro Frota</h2>
        <p>Proteger seu patrimônio é o melhor negócio!</p>
        <a href="pages/orcamento.html" id="main-btn">Faça seu orcamento</a>
    </div>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100"
        style={{height: 480}}
        src={img2}
        alt="Second slide"
    />

    <Carousel.Caption>
    <div class="carousel-caption d-none d-md-block">
        <h2>Seguro Frota</h2>
        <p>Proteger seu patrimônio é o melhor negócio!</p>
        <a href="pages/orcamento.html" id="main-btn">Faça seu orcamento</a>
    </div>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100"
        style={{height: 480}}
        src={img3}
        alt="Third slide"
    />

    <Carousel.Caption>
    <div class="carousel-caption d-none d-md-block">
        <h2>Seguro Frota</h2>
        <p>Proteger seu patrimônio é o melhor negócio!</p>
        <a href="pages/orcamento.html" id="main-btn">Faça seu orcamento</a>
    </div>
    </Carousel.Caption>
    </Carousel.Item>
</Carousel>