
import './App.css';
import React from 'react';

import Logo from './components/logo/index'
import Nav from './components/nav/index'
import Main from './components/main/index'
import Footer from './components/footer/index'


export default () =>{
  return (
    <div className="app">
      <Logo/>
      <Nav/>
      <Main/>
      <Footer/>
  </div>
  )
}
  

