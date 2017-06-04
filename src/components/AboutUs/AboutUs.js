/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AboutUs.scss';
import pictUrl from './aboutUs.jpg';


class AboutUs extends React.Component {
  

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.img}><img src={pictUrl} alt="our work" height="535" width="440"/></div>
          <div className={s.info}>
            <h2 className={s.title}>Про нас</h2>
            <p className={s.text}>
            Майстерня – це місце, де ваша ідея реалізовується з натурального каменю. 
            Вже більше 5 років ми створюємо унікальні дизайн-проекти для приватних і громадських інтер'єрів.
            </p>
            <p className={s.text}>
            Ми пропонуємо різні варіанти співпраці, серед яких створення дизайн-проектів будь-якої складності, їх авторський супровід та повна реалізація, художнє оформлення інтер'єрів, а також їх доставку та послуги монтування.
            </p>
            <p className={s.text}>
            Найважливіше для нас – ваше естетичне задоволення, тож ми гарантуємо якість нашої роботи та дотримання термінів виконання.
            </p>
            <ul className={s.menu}>
              <li>
                <a href="/" className={s.link}>Детальніше</a>
              </li>
              <li>
                <a href="/" className={s.link}>Переглянути роботи</a>
              </li>
            </ul>
         </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(AboutUs);
