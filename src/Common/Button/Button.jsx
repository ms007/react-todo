import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ label, onClick }) => {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  label: 'Click me'
};

export default Button;
