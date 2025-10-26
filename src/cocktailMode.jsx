import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './cocktailMode.css';
import Footer from './footer.jsx';
import { getCocktailOfTheDay } from './utils/getCocktailOfTheDay.js';
import cocktails from './cocktails.json';
import CocktailGuessRow from './components/CocktailGuessRow.jsx';

function CocktailMode() {
    const [dailyCocktail, setDailyCocktail] = useState(null);
    const [guesses, setGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState('');
    const [gameOver, setGameOver] = useState(false);
    const [win, setWin] = useState(false);

    useEffect(() => {
        setDailyCocktail(getCocktailOfTheDay());
    }, []);

    const handleGuessSubmit = (e) => {
        e.preventDefault();
        if (gameOver || !currentGuess.trim()) return;

        const normalized = currentGuess.toLowerCase().trim();
        const found = cocktails.find(c =>
            (c.nombre && c.nombre.toLowerCase() === normalized) ||
            (c.nombre_en && c.nombre_en.toLowerCase() === normalized) ||
            (c.nombre_es && c.nombre_es.toLowerCase() === normalized) ||
            String(c.id) === normalized
        );

        if (!found) {
            alert('Cocktail not found. Try another name from the list.');
            return;
        }

        const newGuesses = [...guesses, found];
        setGuesses(newGuesses);
        setCurrentGuess('');

        if (found.id === dailyCocktail.id) {
            setWin(true);
            setGameOver(true);
        } else if (newGuesses.length >= 10) {
            setGameOver(true);
        }
    };

    if (!dailyCocktail) return <div>Loading...</div>;

    return (
        <div className="app-background" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link to="/" className="back-btn">← Home</Link>

            <video autoPlay loop muted playsInline className="background-video" poster="/poster.jpg">
                <source src="/backgroundCocktelMode.mp4" type="video/mp4" />
            </video>

            <h1 className="mainTitle classic-title">Cocktail Mode</h1>

            <div className="card">
                <p>Guess the cocktail! Correct ingredients will be green. You have 10 attempts.</p>
            </div>

            {!gameOver && (
                <form onSubmit={handleGuessSubmit} className="guess-form">
                    <input
                        value={currentGuess}
                        onChange={(e) => setCurrentGuess(e.target.value)}
                        placeholder="Type a cocktail name and press Enter"
                        className="guess-input"
                        list="cocktails-list"
                    />
                    <datalist id="cocktails-list">
                        {cocktails.map(c => <option key={c.id ?? c.nombre} value={c.nombre ?? c.nombre_en ?? c.nombre_es} />)}
                    </datalist>
                </form>
            )}

            <div className="guesses-container">
                {guesses.map((g, i) => <CocktailGuessRow key={i} guess={g} dailyCocktail={dailyCocktail} />)}
            </div>

            {gameOver && (
                <div className="game-over-box">
                    <h2>{win ? "Cheers, You Win!" : "Shaken, not Stirred... You Lose!"}</h2>
                    <p>The cocktail of the day was: <strong>{dailyCocktail.nombre ?? dailyCocktail.nombre_en ?? dailyCocktail.nombre_es}</strong></p>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default CocktailMode;