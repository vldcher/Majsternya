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
import s from './Gallery.scss';


var PICTURES = [
 {
    id: 1,
    name: "#onyx #m-selection",
    image: "http://k-up.ru/sites/default/files/1/pictures/wooden-floor-tiles-tiles-and-parquet-in-one-1.jpg"
 }, 
 {
    id: 2,
    name: "#3d #randomy",
    image: "http://images.zakupka.com/i/firms/27/112/112918/kolotaya-mramornaya-plitka-bezhevogo-cveta_b5ef6cb78c01183_800x600.jpg"
 },{
    id: 3,
    name: "#onyx #m-selection",
    image: "http://womanadvice.ru/sites/default/files/23/2015-10-19_1637/mramornaya_plitka_-4.jpg"
 }, 
 {
    id: 4,
    name: "#onyx #m-selection",
    image: "http://strport.ru/sites/default/files/imagecache/2_4.jpg"
 }, 
 {
    id: 5,
    name: "#onyx #m-selection",
    image: "https://s-media-cache-ak0.pinimg.com/736x/9b/44/67/9b4467bec8a30d2eaeff3d686f38e5ec.jpg"
 }, {
    id: 6,
    name: "#onyx #m-selection",
    image: "https://ae01.alicdn.com/kf/HTB1h.sVJVXXXXaTaXXXq6xXFXXXd/8-%D0%BC%D0%BC-Gery-%D0%94%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9-%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C-%D0%9C%D1%80%D0%B0%D0%BC%D0%BE%D1%80-Sea-Shell-%D0%A1%D0%B8%D0%BD%D0%B8%D0%B9-%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9-%D0%9A%D1%80%D0%B8%D1%81%D1%82%D0%B0%D0%BB%D0%BB-%D0%A1%D1%82%D0%B5%D0%BA%D0%BB%D1%8F%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BC%D0%BE%D0%B7%D0%B0%D0%B8%D0%BA%D0%B0-%D0%BA%D1%83%D1%85%D0%BD%D1%8F-%D1%89%D0%B8%D1%82%D0%BA%D0%B0-%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F.jpg"
 } 
]

class Picture extends React.Component{
  
  render(){
    return(
      <li>
        <a><img src={this.props.image} width="320px" height="320px" alt="instagram image"/></a>
        <div className={s.pictureName}> {this.props.name} </div>
      </li>
    )
  }
};

class Gallery extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h2 className={s.title}>Краще один раз подивитись</h2>
          <p className={s.text}>фото проектів з нашого &nbsp; <a> instagram </a>. </p>
          <ul className={s.pictures}>
            {
              PICTURES.map(function(el) {
                return <Picture
                  key={el.id}
                  name={el.name}
                  image={el.image}
                />;
              })
            }
          </ul>
          <a className={s.btn}>Всі проекти</a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Gallery);
