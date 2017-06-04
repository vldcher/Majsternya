import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Products from '../../components/Products';
import AboutUs from '../../components/AboutUs';
import Gallery from '../../components/Gallery';
import Contact from '../../components/Contact';


class Homepage extends React.Component {
  
render() {
    return (
      <div >
        <Products/>
        <AboutUs/>
        <Gallery/>
        <Contact/>
      </div>
    );
  }
}

export default Homepage;

