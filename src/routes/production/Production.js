/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Production.scss';
import Url1 from './portraits.jpg';
import Url2 from './sculpture.jpg';
import Url3 from './fireplaces.jpg';
import Url4 from './tops.jpg';



var PRODUCTS = [
 {
    id: 1,
    name: "Портрети",
    image: Url1
 }, 
 {
    id: 2,
    name: "Скульптури",
    image: Url2
 },{
    id: 3,
    name: "Каміни",
    image: Url3
 }, 
 {
    id: 4,
    name: "Столешні",
    image: Url4
 }
 ]

class Products extends React.Component{
    static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render(){
    return(
      <li>
        <img src={this.props.image} height="295px"  alt="instagram image"/>
        <div><a className={s.link}> {this.props.name} </a></div>
      </li>
    )
  }
};

class Production extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h2 className={s.title}>Каталог продукції</h2>
          <ul className={s.products}>
            <li className={s.catalog}>
              <ul className={s.choose}>
                <li><a href="">Внутрішнє та зовнішнє оздоблення</a></li>
                <li><a href="">Складні архітектурні вироби</a></li>
                <li><a href="">Садово-паркове мистецтво</a></li>
              </ul>
              <a href="" className={s.choose_link}>Каталог продукції</a>
            </li>
            {
              PRODUCTS.map(function(el) {
                return <Products
                  key={el.id}
                  name={el.name}
                  image={el.image}
                />;
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}


export default withStyles(s)(Production);
