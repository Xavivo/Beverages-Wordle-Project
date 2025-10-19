import React from 'react';
import InfoBox from './InfoBox.jsx';
import './GuessRow.css';

const GuessRow = ({ guess, dailyDrink }) => {
    const properties = [
        { name: 'Type', value: guess.tipo, correctValue: dailyDrink.tipo },
        { name: 'Origin', value: guess.pais_origen, correctValue: dailyDrink.pais_origen },
        { name: 'ABV (%)', value: guess.graduacion_alcohol, correctValue: dailyDrink.graduacion_alcohol, isNumeric: true },
        { name: 'Main Ingredient', value: guess.ingrediente_principal, correctValue: dailyDrink.ingrediente_principal },
        { name: 'Created', value: guess.fecha_creacion_año, correctValue: dailyDrink.fecha_creacion_año, isNumeric: true },
        { name: 'Price ($)', value: guess.precio_dolares, correctValue: dailyDrink.precio_dolares, isNumeric: true },
    ];

    return (
        <div className="guess-row">
            {properties.map((prop, index) => (
                <InfoBox
                    key={index}
                    name={prop.name}
                    value={prop.value}
                    correctValue={prop.correctValue}
                    isNumeric={prop.isNumeric || false}
                    delay={index * 0.5} // Staggered animation
                />
            ))}
        </div>
    );
};

export default GuessRow;