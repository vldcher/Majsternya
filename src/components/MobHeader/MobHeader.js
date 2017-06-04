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
import Link from '../Link';
import s from './MobHeader.scss';


class MobHeader extends React.Component {
  render() {
    return (
      <div className={s.mob_header}>
        <h4><Link className={s.title} to="/">Майстерня</Link></h4>
        <button className={s.btn}>
          <span className={s.line}></span> 
          <span className={s.line}></span> 
          <span className={s.line}></span> 
        </button>
      </div>
    );
  }
}

export default withStyles(s)(MobHeader);
