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
import s from './Contact.scss';
import Link from '../Link';


class Contact extends React.Component {
  render() {
    return (
        <div className={s.container}>
          <div className={s.root}>
            <h2 className={s.title}>Виготовимо наступний шедевр разом</h2>
            <p className={s.text}>Зв'яжіться з нами та дізнайтесь більше</p>
            <form action="" className={s.form}>
              <input type="text" name="Name" className={s.input} placeholder="Ім'я" required/>
              <input type="text" name="Phone" className={s.input} placeholder="Телефон" required/>
              <input type="text" name="Mail" className={s.input} placeholder="E-mail" required/>
              <textarea type="text" name="Question" className={s.OpenAnswer} placeholder="Ваша ідея або питання"/>
              <button className={s.formBtn}>Зв'язатись</button>
            </form>
          </div>
        </div>
    );
  }
}

export default withStyles(s)(Contact);
