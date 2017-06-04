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
import s from './Products.scss';
import Url1 from './portraits.jpg';
import Url2 from './sculpture.jpg';
import Url3 from './fireplaces.jpg';
import Url4 from './tops.jpg';


const Items = [
 {
    id: 1,
    name: "Портрети",
    image: Url1,
    link: "/",
    alt: "Портрети"

 }, 
 {
    id: 2,
    name: "Скульптури",
    image: Url2,
    link: "/",
    alt: "Скульптури"
 },{
    id: 3,
    name: "Каміни",
    image: Url3,
    link: "/",
    alt: "Каміни"
 }, 
 {
    id: 4,
    name: "Столешні",
    image: Url4,
    link: "/",
    alt: "Столешні"
 }
 ]

const Item = (props) => 
  <li>
    <img src={props.image} height="295px"  alt="image"/>
    <div><a className={s.link}> {props.name} </a></div>
  </li>

const Products = () => 
  <div className={s.root}>
    <div className={s.container}>
      <h2 className={s.title}>Каталог продукції</h2>
      <ul className={s.products}>
        <li className={s.catalog}>
          <ul className={s.choose}>
            <li><a href="" className={s.active}>Внутрішнє та зовнішнє оздоблення</a></li>
            <li><a href="">Складні архітектурні вироби</a></li>
            <li><a href="">Садово-паркове мистецтво</a></li>
          </ul>
          <a href="" className={s.btn}>Каталог продукції</a>
        </li>
        {
          Items.map(el => 
            <Item
              key={el.id}
              name={el.name}
              image={el.image}
              link={el.link}
              alt={el.alt}
              
            />
          )
        }
      </ul>
    </div>
  </div>


export default withStyles(s)(Products);
