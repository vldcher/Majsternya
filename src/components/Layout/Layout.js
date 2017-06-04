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

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import reset from '../../assets/styles/reset.css';
import s from './Layout.css';
import Header from '../Header';
import PageHeader from '../PageHeader';
import Footer from '../Footer';

const Layout = ({children}) => {
  const header = children.props.type;
  return (
    <div>
      {header === "home" 
        ? <Header /> 
        : <PageHeader />
      }
      {children}
      <Footer />
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(reset, normalizeCss, s)(Layout);
