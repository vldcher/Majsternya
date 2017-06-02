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
    image: "https://s-media-cache-ak0.pinimg.com/564x/b4/08/77/b408775c3cdeeb01c98ae5a22e567093.jpg"
 }, 
 {
    id: 2,
    name: "#3d #randomy",
    image: "https://s-media-cache-ak0.pinimg.com/564x/b4/08/77/b408775c3cdeeb01c98ae5a22e567093.jpg"
 },{
    id: 3,
    name: "#onyx #m-selection",
    image: "https://s-media-cache-ak0.pinimg.com/564x/b4/08/77/b408775c3cdeeb01c98ae5a22e567093.jpg"
 }, 
 {
    id: 4,
    name: "#onyx #m-selection",
    image: "https://s-media-cache-ak0.pinimg.com/564x/b4/08/77/b408775c3cdeeb01c98ae5a22e567093.jpg"
 }, 
 {
    id: 5,
    name: "#onyx #m-selection",
    image: "https://s-media-cache-ak0.pinimg.com/564x/b4/08/77/b408775c3cdeeb01c98ae5a22e567093.jpg"
 }, {
    id: 6,
    name: "#onyx #m-selection",
    image: "https://s-media-cache-ak0.pinimg.com/564x/b4/08/77/b408775c3cdeeb01c98ae5a22e567093.jpg"
 } 
]

class Picture extends React.Component{
    static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render(){
    return(
      <li>
        <img src={this.props.image} width="320px" height="320px" alt="instagram image"/>
        <div className={s.pictureName}> {this.props.name} </div>
      </li>
    )
  }
};

class Gallery extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

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
          <a className={s.link}>Всі проекти</a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Gallery);
