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
//   brand: {
//     id: 'header.brand',
//     defaultMessage: 'Your Company Brand',
//     description: 'Brand name displayed in header',
//   },
//   bannerTitle: {
//     id: 'header.banner.title',
//     defaultMessage: 'React',
//     description: 'Title in page header',
//   },
//   bannerDesc: {
//     id: 'header.banner.desc',
//     defaultMessage: 'Complex web apps made easy',
//     description: 'Description in header',
//   },
// });
brand: {
  id: 'header.brand',
  defaultMessage: 'Майстерня',
  description: 'Brand name displayed in header',
  },
bannerTitle: {
  id: 'header.banner.title',
  defaultMessage: 'Створюємо шедeври з натурального каменю власноруч ',
  description: 'Title in page header',
  },
phone: {
  id: 'header.phone',
  defaultMessage: '+38 066 445 59 00',
  description: 'Contact mobile phone',
  },
address: {
  id: 'header.address',
  defaultMessage: 'м. Мукачево, вул. Переяславська, 1',
  description: 'Address of Majsternya location',
  },
contactButtonText: {
  id: 'header.contactButtonText',
  defaultMessage: 'Зв’язатись з нами',
  description: 'Button for feedback',
  },
galleryTitle: {
  id: 'gallery.galleryTitle',
  defaultMessage: 'Каталог продукції',
  description: 'Catalogue title in home',
  },
about: {
  id: 'gallery.about',
  defaultMessage: 'Про нас',
  description: 'About title in home',
  },
works: {
  id: 'gallery.works',
  defaultMessage: 'Наші роботи',
  description: 'Our works title in home',
},
});
class Header extends React.Component {
  render() {
    return (
      <header className={s.root}>
        <div className={cx(s.container, s.headerContainer)}>
          <div className={s.slider}>
            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} alt="Logo" />
            <h1 className={s.title}><FormattedMessage {...messages.brand} /></h1>
          </div>
          <div className={s.info}>
            <div className={s.left}>
              <h2 className={s.tagline}><FormattedMessage {...messages.bannerTitle} /></h2>
              <div className={s.menuHorizontal}>
                <div className={s.language}>
                  <LanguageSwitcher />
                </div>
                <button className={cx(s.buttonPrimary, s.contactUsBtn)}><FormattedMessage {...messages.contactButtonText} /></button>
              </div>
            </div>
            <div className={s.right}>
              <div className={s.menuVertical}>
                <div className={s.header}>
                  <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="48px" height="133px" alt="Logo" />
                  <div className={s.card}>
                    <h3 className={s.title}><FormattedMessage {...messages.brand} /></h3>
                    <div className={s.contact}><FormattedMessage {...messages.phone} /></div>
                    <div className={s.address}><FormattedMessage {...messages.address}/></div>
                  </div>
                </div>
                <nav className={s.nav}>
                  <ul>
                    <li><Link className={s.link} to="/"><FormattedMessage {...messages.galleryTitle} /></Link></li>
                    <li><Link className={s.link} to="/"><FormattedMessage {...messages.about} /></Link></li>
                    <li><Link className={s.link} to="/"><FormattedMessage {...messages.works} /></Link></li>
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
