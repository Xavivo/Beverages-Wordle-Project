import React, { useState, useEffect } from 'react';
import './IngredientBox.css';

const IngredientBox = ({ ingredient, isCorrect, delay }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    const className = `ingredient-box ${isCorrect ? 'correct' : 'incorrect'} ${visible ? 'visible' : ''}`;

    return (
        <div className={className}>
            {ingredient}
        </div>
    );
};

export default IngredientBox;