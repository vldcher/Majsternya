/**
* React Starter Kit (https://www.reactstarterkit.com/)
*
* Copyright © 2014-present Kriasoft, LLC. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
// import Button from '../Button';
import LanguageSwitcher from '../LanguageSwitcher';
import logoUrl from './logo.png';
import logoUrl2x from './logo-small.png';

const messages = defineMessages({
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

});

class Header extends React.Component {
render() {
return (
<div className={s.root}>
	<div className={s.container}>
		<div className={s.logoWrapper}>
			<div className={s.logoImg} >
				<Link className={s.brand} to="/">
					<img src={logoUrl}  width="103" height="285" alt="Майстерня" />
				</Link>
			</div> 
			<div className={s.brandTxt}>
				<Link className={s.brand} to="/">
					<FormattedMessage {...messages.brand} />
				</Link>
			</div>
		</div>
		<div className={s.banner}>
			<div className={s.bannerTitleWrapper}>
				<h1 className={s.bannerTitle}>
					<FormattedMessage {...messages.bannerTitle} />
				</h1>
				<div className={s.bannerTitleAction}>
					<div className={s.local} >
						<LanguageSwitcher />
					</div>
					<button className={s.button_primary} type="button"><FormattedMessage {...messages.contactButtonText} /></button>
				</div>
			</div>
			<div className={s.brandMenu}>
				<div className={s.contactInfo}>
					<div className={s.smallLogoImg} >
						<img src={logoUrl2x}  width="48" height="133" alt="Майстерня" />
					</div>
					<div className={s.infoWrapper}>
						<span className={s.brandTxt}>
							<Link className={s.brand} to="/">
								<FormattedMessage {...messages.brand} />
							</Link>
						</span>
						<span className={s.phone}>
							<p><FormattedMessage {...messages.phone} /></p>
							<b><FormattedMessage {...messages.address} /></b>
						</span>
					</div>
				</div>
				<nav className={s.navigation}>
					<Navigation />
				</nav>
			</div>
		</div>
	</div>
</div>
);
}
}

export default withStyles(s)(Header);
