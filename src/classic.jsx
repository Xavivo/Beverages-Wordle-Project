import React, { useState, useEffect } from "react";
import './classic.css';
import Footer from './footer.jsx';
import { getDailyDrink } from './utils/getDailyDrink.js';
import drinks from './drinks.json';
import GuessRow from './components/GuessRow.jsx';

function Classic() {
  const [dailyDrink, setDailyDrink] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    setDailyDrink(getDailyDrink());
  }, []);

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    if (gameOver || !currentGuess.trim()) return;

    const foundDrink = drinks.find(drink => drink.nombre.toLowerCase() === currentGuess.toLowerCase().trim());

    if (foundDrink) {
      const newGuesses = [...guesses, foundDrink];
      setGuesses(newGuesses);
      setCurrentGuess('');

      if (foundDrink.id === dailyDrink.id) {
        setWin(true);
        setGameOver(true);
      } else if (newGuesses.length >= 10) {
        setGameOver(true);
      }
    } else {
      alert("Beverage not found. Please try another.");
    }
  };

  if (!dailyDrink) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-background" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        poster="/poster.jpg"
      >
        <source src="/backgroundClassic.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1 className="mainTitle classic-title">Classic Mode</h1>

      <div className="card">
        <img src="/logo.svg" alt="logo" style={{ width: 48, height: 'auto' }} />
        <p>Guess the beverage! You have 10 attempts. Good luck!</p>
        <img src="/logo.svg" alt="logo" className="card-logo" />
      </div>

      <div className="challenge-box">
        <h2>Today's challenge</h2>
        <p>Type any beverage to start.</p>
      </div>

      {!gameOver && (
        <form onSubmit={handleGuessSubmit} className="guess-form">
          <input
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
            placeholder="Type your guess here and press Enter"
            className="guess-input"
            list="drinks-list"
          />
          <datalist id="drinks-list">
            {drinks.map(d => <option key={d.id} value={d.nombre} />)}
          </datalist>
        </form>
      )}

      <div className="guesses-container">
        {guesses.map((guess, index) => (
          <GuessRow key={index} guess={guess} dailyDrink={dailyDrink} />
        ))}
      </div>

      {gameOver && (
        <div className="game-over-box">
          <h2>
            {win ? "You Win!" : "You Lose!"}
          </h2>
          <p>The beverage of the day was: <strong>{dailyDrink.nombre}</strong></p>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Classic;