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
import s from './Footer.css';
import Link from '../Link';
import mapUrl from './map.png';


class Footer extends React.Component {
  render() {
    return (
      <footer className={s.root}>
        <div className={s.container}>
          <div className={s.root}>
            <h2 className={s.title}>Виготовимо наступний шедевр разом</h2>
            <p className={s.text}>Зв'яжіться з нами та дізнайтесь більше</p>
            <form action="" className={s.form}>
              <input type="text" className={s.input} placeholder="Ім'я"/>
              <input type="text" className={s.input} placeholder="Телефон"/>
              <input type="text" className={s.input} placeholder="E-mail"/>
              <textarea type="text" className={s.OpenAnswer} placeholder="Ваша ідея або питання"/>
              <button className={s.btn}>Зв'язатись</button>
            </form>
          </div>
          <div className={s.contact}>
<<<<<<< HEAD
            <img src={mapUrl} width="660" height="320" alt="Map" />
=======
           {/*            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4451.512134150768!2d22.71654395910133!3d48.43954782492333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739ac78bafa8c3f%3A0x2da00d5a792c2aa!2z0JzRg9C60LDRh9C10LLQviwg0JfQsNC60LDRgNC_0LDRgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1sru!2sua!4v1496349245972" width="660" height="320" frameborder="0" style="border:0" allowfullscreen></iframe>
*/} <img src={mapUrl} width="660" height="320" alt="Map" />
>>>>>>> refs/remotes/origin/master
            <div className={s.info}>
              <h3 className={s.titleH3}>Контакти</h3>
              <p className={s.contactNom}>+38 066 445 59 00</p>
              <p className={s.contactAdress}>м. Мукачево вул. Переяславська, 1</p>
              <Link className={s.link} to="/">Каталог продукції</Link>
              <Link className={s.link} to="/">Про нас</Link>
              <Link className={s.link} to="/">Наші роботи</Link>
            </div>
          </div>
          </div>
      </footer>
    );
  }
}

export default withStyles(s)(Footer);
