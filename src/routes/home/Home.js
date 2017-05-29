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
import s from './Home.css';
// import Link from '../../components/Link';
// import Catalogue from '../components/Catalogue';


const messages = defineMessages({

//My nav
catalogueTitle: {
id: 'home.catalogueTitle',
defaultMessage: 'Каталог продукції',
description: 'Catalogue title in home',
},
about: {
id: 'home.about',
defaultMessage: 'Про нас',
description: 'About title in home',
},
works: {
id: 'home.works',
defaultMessage: 'Краще один раз подивитись',
description: 'Our works title in home',
},
//Must be in catalogueNav component
decoration: {
id: 'catalogueNav.decoration',
defaultMessage: 'Внутрішнє та зовнішнє оздоблення',
description: 'interior and exterior decoration',
},
architecture: {
id: 'catalogueNav.architecture',
defaultMessage: 'Складні архітектурні вироби',
description: 'complex architectural products',
},
gardenDesign: {
id: 'catalogueNav.gardenDesign',
defaultMessage: 'Садово-паркове мистецтво',
description: 'garden design',
},
});

class Home extends React.Component {

render() {
return (
<div className={s.root}> 
  <div className={s.container}>
    

  </div>
</div>
);
}
}

export default withStyles(s)(Home);
