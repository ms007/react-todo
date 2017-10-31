import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Input.css';

const Input = ({ value, onChange, className }) => {
  const classes = cx('Input', className);
  return <input className={classes} type="text" value={value} onChange={onChange} />;
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

export default Input;
