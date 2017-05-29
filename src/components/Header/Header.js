/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/*import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import LanguageSwitcher from '../LanguageSwitcher';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

const messages = defineMessages({
  brand: {
    id: 'header.brand',
    defaultMessage: 'Your Company Brand',
    description: 'Brand name displayed in header',
  },
  bannerTitle: {
    id: 'header.banner.title',
    defaultMessage: 'React',
    description: 'Title in page header',
  },
  bannerDesc: {
    id: 'header.banner.desc',
    defaultMessage: 'Complex web apps made easy',
    description: 'Description in header',
  },
});

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="38" height="38" alt="React" />
            <span className={s.brandTxt}>
              <FormattedMessage {...messages.brand} />
            </span>
          </Link>
          <LanguageSwitcher />
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>
              <FormattedMessage {...messages.bannerTitle} />
            </h1>
            <FormattedMessage tagName="p" {...messages.bannerDesc} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);*/


import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';
import cx from 'classnames';
import LanguageSwitcher from '../LanguageSwitcher';
import logoUrl from './logo.png';
import logoUrl2x  from './logo@2x.png';

const messages = defineMessages({
  brand: {
    id: 'header.brand',
    defaultMessage: 'Your Company Brand',
    description: 'Brand name displayed in header',
  },
  bannerTitle: {
    id: 'header.banner.title',
    defaultMessage: 'React',
    description: 'Title in page header',
  },
  bannerDesc: {
    id: 'header.banner.desc',
    defaultMessage: 'Complex web apps made easy',
    description: 'Description in header',
  },
});

class Header extends React.Component {
  render() {
    return (
      <header className={s.root}>
        <div className={cx(s.container, s.headerContainer)}>
          <div className={s.slider}>
            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} alt="Logo" />
            <h1 className={s.title}>Майстерня</h1>
          </div>
          <div className={s.info}>
            <div className={s.left}>
              <h2 className={s.tagline}>Створюємо шедeври <br />з натурального каменю власноруч</h2>
              <div className={s.menuHorizontal}>
                <div className={s.language}>
                  <LanguageSwitcher />
                </div>
                <div className={s.contactUs}>Зв’язатись з нами</div>
              </div>
            </div>
            <div className={s.right}>
              <div className={s.menuVertical}>
                <div className={s.header}>
                  <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="48px" height="133px" alt="Logo" />
                  <div className={s.card}>
                    <h3 className={s.title}>Майстерня</h3>
                    <div className={s.contact}>+38 066 445 59 00</div>
                    <div className={s.address}>м. Мукачево, вул. Переяславська, 1</div>
                  </div>
                </div>
                <nav className={s.nav}>
                  <ul>
                    <li><Link className={s.link} to="/">Каталог продукції</Link></li>
                    <li><Link className={s.link} to="/">Про нас</Link></li>
                    <li><Link className={s.link} to="/">Наші роботи</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withStyles(s)(Header);
