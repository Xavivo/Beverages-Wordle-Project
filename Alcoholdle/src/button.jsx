import React from 'react';
import './App.css';

const Button = ({ onClick, children, type = "button", style }) => (
    <button type={type} onClick={onClick} style={style}>
        {children}
    </button>
);

export default Button;