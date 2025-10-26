import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './cocktailMode.css';
import Footer from './footer.jsx';
import { getCocktailOfTheDay } from './utils/getCocktailOfTheDay.js';
import cocktails from './cocktails.json';
import CocktailGuessRow from './components/CocktailGuessRow.jsx';

function CocktelMode() {
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

    const foundCocktail = cocktails.find(cocktail => cocktail.nombre.toLowerCase() === currentGuess.toLowerCase().trim());

    if (foundCocktail) {
      const newGuesses = [...guesses, foundCocktail];
      setGuesses(newGuesses);
      setCurrentGuess('');

      if (foundCocktail.id === dailyCocktail.id) {
        setWin(true);
        setGameOver(true);
      } else if (newGuesses.length >= 10) {
        setGameOver(true);
      }
    } else {
      alert("Cocktail not found. Please try another.");
    }
  };

  if (!dailyCocktail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-background" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Link to="/" className="back-btn">← Home</Link>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        poster="/poster.jpg"
      >
        <source src="/backgroundCocktelMode.mp4" type="video/mp4" />
        Your browser does not support the video tag.
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
            {cocktails.map(c => <option key={c.id} value={c.nombre} />)}
          </datalist>
        </form>
      )}

      <div className="guesses-container">
        {guesses.map((guess, index) => (
          <CocktailGuessRow key={index} guess={guess} dailyCocktail={dailyCocktail} />
        ))}
      </div>

      {gameOver && (
        <div className="game-over-box">
          <h2>{win ? "Cheers, You Win!" : "Shaken, not Stirred... You Lose!"}</h2>
          <p>The cocktail of the day was: <strong>{dailyCocktail.nombre}</strong></p>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default CocktelMode;