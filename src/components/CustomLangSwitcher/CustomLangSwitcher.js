import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link';
import s from './CustomLangSwitcher.scss';


const CustomLangSwitcher = () => 
  <div className={s.langSwitcher}>
    <span className={s.langItem}>
      <span>Укр</span> 
    </span> 
    <span className={s.langItem}>
      <Link className={s.langLink} to="/">Рус</Link>
    </span> 
  </div>
  
export default withStyles(s)(CustomLangSwitcher);