/* eslint-disable no-shadow */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLocale } from '../../actions/intl';
import s from './LanguageSwitcher.scss';

function LanguageSwitcher({ currentLocale, availableLocales, setLocale }) {
  const isSelected = locale => locale === currentLocale;
  const localeDict = {
    'uk-UA': 'Укр',
    'ru-RU': 'Рус',
  };
  const localeName = locale => localeDict[locale] || locale;
  return (
    <div className={s.lang_switcher}>
      {availableLocales.map(locale => (
        <span  className={s.lang_items} key={locale}>
          {isSelected(locale) ? (
            <span className={s.lang_item}>{localeName(locale)}</span>
          ) : (
            // github.com/yannickcr/eslint-plugin-react/issues/945
            // eslint-disable-next-line react/jsx-indent
            <a
              className={s.lang_link}
              href={`?lang=${locale}`}
              onClick={(e) => {
                setLocale({ locale });
                e.preventDefault();
              }}
            >{localeName(locale)}</a>
          )}
          {' '}
        </span>
      ))}
    </div>
  );
}

LanguageSwitcher.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  availableLocales: PropTypes.arrayOf(PropTypes.string).isRequired,
  setLocale: PropTypes.func.isRequired,
};

const mapState = state => ({
  availableLocales: state.runtime.availableLocales,
  currentLocale: state.intl.locale,
});

const mapDispatch = {
  setLocale,
};

export default connect(mapState, mapDispatch)(LanguageSwitcher);
