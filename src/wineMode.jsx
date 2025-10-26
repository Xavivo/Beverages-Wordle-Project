import React, { useState, useEffect } from "react";
import './classic.css';
import Footer from './footer.jsx';
import { getWineOfTheDay } from './utils/getWineOfTheDay.js';
import wines from './wines.json';
import GuessRow from './components/GuessRow.jsx';

function WineMode() {
  const [dailyWine, setDailyWine] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    setDailyWine(getWineOfTheDay());
  }, []);

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    if (gameOver || !currentGuess.trim()) return;

    const normalized = currentGuess.toLowerCase().trim();
    const found = wines.find(w =>
      (w.nombre && w.nombre.toLowerCase() === normalized) ||
      (String(w.id) === normalized)
    );

    if (found) {
      const newGuesses = [...guesses, found];
      setGuesses(newGuesses);
      setCurrentGuess('');

      if (found.id === dailyWine.id) {
        setWin(true);
        setGameOver(true);
      } else if (newGuesses.length >= 10) {
        setGameOver(true);
      }
    } else {
      alert("Wine not found. Try selecting a name from the list.");
    }
  };

  if (!dailyWine) return <div>Loading...</div>;

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

      <h1 className="mainTitle classic-title">Wine Mode</h1>

      <div className="card">
        <p>Guess the wine! You have 10 attempts. Each guess reveals the wine fields (type, origin, ABV, grape, vintage, price).</p>
      </div>

      <div className="challenge-box">
        <h2>Today's wine challenge</h2>
        <p>Type a wine name and press Enter. Autocomplete is available.</p>
      </div>

      {!gameOver && (
        <form onSubmit={handleGuessSubmit} className="guess-form">
          <input
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
            placeholder="Type your guess here and press Enter"
            className="guess-input"
            list="wines-list"
          />
          <datalist id="wines-list">
            {wines.map(w => <option key={w.id} value={w.nombre} />)}
          </datalist>
        </form>
      )}

      <div className="guesses-container">
        {guesses.map((guess, index) => (
          <GuessRow key={index} guess={guess} dailyDrink={dailyWine} />
        ))}
      </div>

      {gameOver && (
        <div className="game-over-box">
          <h2>{win ? "You Win!" : "You Lose!"}</h2>
          <p>The wine of the day was: <strong>{dailyWine.nombre}</strong></p>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default WineMode;