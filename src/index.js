import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './sections/header';
import AboutUs from './sections/about-us';
import Portfolio from './sections/portifolio'
import Services from './sections/services'
import Prices from './sections/prices'
import Comments from './sections/comments'
import Contact from './sections/contact'
import Footer from './sections/footer'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AboutUs />
    <Portfolio />
    <Services />
    <Prices />
    <Comments />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);