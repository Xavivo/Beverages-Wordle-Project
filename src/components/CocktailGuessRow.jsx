import React from 'react';
import IngredientBox from './IngredientBox.jsx';
import './CocktailGuessRow.css';

const CocktailGuessRow = ({ guess, dailyCocktail }) => {
    const dailyIngredients = dailyCocktail.ingredientes.map(i => i.toLowerCase());

    return (
        <div className="cocktail-guess-row">
            <h3 className="cocktail-guess-name">{guess.nombre}</h3>
            <div className="ingredients-container">
                {guess.ingredientes.map((ingredient, index) => (
                    <IngredientBox
                        key={index}
                        ingredient={ingredient}
                        isCorrect={dailyIngredients.includes(ingredient.toLowerCase())}
                        delay={index * 0.3}
                    />
                ))}
            </div>
        </div>
    );
};

export default CocktailGuessRow;