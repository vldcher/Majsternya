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
import s from './Footer.scss';
import Link from '../Link';


class Footer extends React.Component {
  render() {
    return (
      <footer className={s.root}>
        <div className={s.container}>
          <div className={s.contact}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10031.965788804619!2d22.714221216740576!3d48.4390308094143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0JzRg9C60LDRh9C10LLQviwg0JfQsNC60LDRgNC_0LDRgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMINC_0LXRgNC10Y_RgdC70ZbQstGB0YzQutCwIDE!5e0!3m2!1sru!2sua!4v1496554773706" width="660" height="320" frameBorder="0" allowFullScreen></iframe>
            <div className={s.info}>
              <h3 className={s.titleH3}>Контакти</h3>
              <div className={s.contactNom}>+38 066 445 59 00</div>
              <div className={s.contactAdress}>м. Мукачево вул. Переяславська, 1</div>
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
