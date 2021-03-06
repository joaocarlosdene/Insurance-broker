import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { Nav, Navbar, NavbarBrand, NavDropdown, NavLink } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'

import Header from "./components/header";
import Slider from './components/slider'
import Tiposeguro from './components/tipo-seguro'
import Parceiros from './components/parceiros'
import Vantagens from './components/vantagens'
import Ajuda from './components/ajuda'
import Footer from './components/footer';


export default props =>
  <div className="app">
      <Header/>
      <Slider/>
      <Tiposeguro/>
      <Vantagens/>
      <Ajuda/>
      <Parceiros/>
      <Footer/>
  </div>
