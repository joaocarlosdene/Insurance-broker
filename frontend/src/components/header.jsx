import React from "react";
import './header.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavbarBrand, NavDropdown, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";


export default props =>
    <Navbar bg="dark" variant="dark" expand="md">
        <NavbarBrand className="logo" >
            <div>Prime Seguros</div>
        </NavbarBrand>
        <Navbar.Toggle/>
        <NavbarCollapse className="menu-right">
            <Nav >
                <NavDropdown title="Prime Seguros" menuVariant="dark">
                    <NavDropdown.Item href="#">Conheça a Prime</NavDropdown.Item> 
                    <NavDropdown.Item href="#">Unidades</NavDropdown.Item> 
                    <NavDropdown.Item href="#">Seguradoras</NavDropdown.Item> 
                </NavDropdown>
                <NavDropdown title="Para Você" menuVariant="dark">
                    <NavDropdown.Item href="#">Automóvel</NavDropdown.Item> 
                    <NavDropdown.Item href="#">Residencial</NavDropdown.Item> 
                    <NavDropdown.Item href="#">Vida Individual</NavDropdown.Item> 
                    <NavDropdown.Item href="#">Viagem</NavDropdown.Item> 
                    <NavDropdown.Item href="#">Profissionais</NavDropdown.Item> 
                    <NavDropdown.Item href="#">Fiança Locatícia, <br/> Financiamento e <br/> Consórcio</NavDropdown.Item> 
                    <NavDropdown.Item href="#">Seguradoras</NavDropdown.Item> 
                </NavDropdown>
                <NavDropdown title="Para Empresa" menuVariant="dark">
                    <NavDropdown.Item href="#">Frota</NavDropdown.Item> 
                    <NavDropdown.Item href="#">Empresarial</NavDropdown.Item> 
                    <NavDropdown.Item href="#">Vida Global</NavDropdown.Item>
                    <NavDropdown.Item href="#">Transporte</NavDropdown.Item> 
                    <NavDropdown.Item href="#">Agricola / Rural</NavDropdown.Item> 
                    <NavDropdown.Item href="#">Saúde e Odontológico</NavDropdown.Item> 
                    <NavDropdown.Item href="#">Profissionais</NavDropdown.Item> 
                    <NavDropdown.Item href="#">Condomínios</NavDropdown.Item>  
                </NavDropdown>
                <NavDropdown title="Sinistros" menuVariant="dark">
                    <NavDropdown.Item href="#">Como Proceder</NavDropdown.Item> 
                    <NavDropdown.Item href="#">Assistências 24h</NavDropdown.Item> 
                    <NavDropdown.Item href="#">B.O Online</NavDropdown.Item> 
                </NavDropdown>
                <NavLink href="/">Fale Conosco</NavLink>
            </Nav>
            </NavbarCollapse>
    </Navbar>
