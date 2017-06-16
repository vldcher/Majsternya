import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import MobHeader from '../MobHeader';
import cx from 'classnames';
import CustomLangSwitcher from '../CustomLangSwitcher';
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
        <div className={s.container}>
          <MobHeader />
          <div className={s.sliderContainer}>
            <div className={s.slider}>
              <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} alt="Logo" />
              <h1 className={s.title}>Майстерня</h1>
            </div>
          </div>
          <div className={cx(s.info, s.headerContainer)}>
            <div className={s.left}>
              <div className={s.tagline}>
                <h2>Створюємо шедeври з натурального каменю власноруч</h2>
              </div>
              <div className={s.menuHorizontal}>
                <CustomLangSwitcher />
                <div className={s.btn}>Зв’язатись з нами</div>
              </div>
            </div>
            <div className={s.right}>
              <div className={s.menuVertical}>
                <div className={s.header}>
                  <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="48px" height="133px" alt="Logo" />
                  <div className={s.card}>
                    <h3 className={s.title}>Майстерня</h3>
                    <a href="#" className={s.contact}>+38 066 445 59 00</a>
                    <div className={s.address}>м. Мукачево, вул. Переяславська, 1</div>
                  </div>
                </div>
                <nav className={s.nav}>
                  <ul>
                    <li><Link className={s.link} to="/catalogue">Каталог продукції</Link></li>
                    <li><Link className={s.link} to="/aboutUs">Про нас</Link></li>
                    <li><Link className={s.link} to="/gallery">Наші роботи</Link></li>
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
