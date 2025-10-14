import React from 'react';
import { useNavigate } from 'react-router-dom'
import './App.css';

const Button = ({ text, subtitle, onClick, to }) => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    if (onClick) onClick(e)
    if (to) navigate(to)
  }

  return (
    <button onClick={handleClick}>
      <div>{text}</div>
      {subtitle && <div style={{ fontSize: '0.85em', opacity: 0.85, marginTop: 4 }}>{subtitle}</div>}
    </button>
  );
};

export default Button;