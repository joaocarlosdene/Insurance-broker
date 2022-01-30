import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { Nav, Navbar, NavbarBrand, NavDropdown, NavLink } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'

import Header from "./components/header";
import Slider from './components/slider'


export default props =>
  <div className="app">
      <Header/>
      <Slider/>
  </div>
