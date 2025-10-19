import React, { useState, useEffect } from 'react';
import './InfoBox.css';

const InfoBox = ({ name, value, correctValue, isNumeric, delay }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    let className = 'info-box';
    let arrow = '';

    if (value === correctValue) {
        className += ' correct';
    } else {
        className += ' incorrect';
        if (isNumeric) {
            arrow = value < correctValue ? '↑' : '↓';
        }
    }

    return (
        <div className={`${className} ${visible ? 'visible' : ''}`}>
            <div className="info-box-name">{name}</div>
            <div className="info-box-value">{value} {arrow}</div>
        </div>
    );
};

export default InfoBox;