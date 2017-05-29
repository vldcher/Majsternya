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
import { defineMessages, FormattedMessage } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Catalogue.css';
import Link from '../Link';

const messages = defineMessages({

//My nav
catalogueTitle: {
id: 'catalogue.catalogueTitle',
defaultMessage: 'Каталог продукції',
description: 'Catalogue title in home',
},
about: {
id: 'catalogue.about',
defaultMessage: 'Про нас',
description: 'About title in home',
},
works: {
id: 'catalogue.works',
defaultMessage: 'Краще один раз подивитись',
description: 'Our works title in home',
},
});

class Catalogue extends React.Component {

render() {
return (
<div className={s.root}> 
  <div className={s.container}>
    <h2><FormattedMessage {...messages.catalogueTitle} /></h2>

    <div className={s.catalogueWrapper}>
      <div className={s.catalogueFirstHalf}>
        <div className={s.catalogueNav}>

        </div>
      </div>
      <div className={s.catalogueSecondHalf}>

      </div>

    </div>



  </div>
</div>
);
}
}

export default withStyles(s)(Catalogue);
