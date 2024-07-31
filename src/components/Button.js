import React from 'react';
import './Button.css';

const Button = ({ value, handleClick }) => {
  return (
    <button onClick={() => handleClick(value)} className={`button ${value === 'C' ? 'clear' : ''}`}>
      {value}
    </button>
  );
};

export default Button;
