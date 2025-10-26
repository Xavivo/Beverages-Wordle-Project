import React, { useState, useEffect } from "react";
import './App.css';
import './cocktailMode.css';
import Footer from './footer.jsx';
import { getDescriptionOfTheDay } from './utils/getDescriptionOfTheDay.js';
import cocktails from './cocktails.json';
import CocktailGuessRow from './components/CocktailGuessRow.jsx';

function Description() {
  const [dailyDescription, setDailyDescription] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    setDailyDescription(getDescriptionOfTheDay());
  }, []);

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    if (gameOver || !currentGuess.trim()) return;

    const found = cocktails.find(c => c.nombre.toLowerCase() === currentGuess.toLowerCase().trim());
    if (found) {
      const newGuesses = [...guesses, found];
      setGuesses(newGuesses);
      setCurrentGuess('');
      if (found.id === dailyDescription.id) {
        setWin(true);
        setGameOver(true);
      } else if (newGuesses.length >= 10) {
        setGameOver(true);
      }
    } else {
      alert("Drink not found. Try another name from the list.");
    }
  };

  if (!dailyDescription) return <div>Loading...</div>;

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
        <source src="/backgroundDescription.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1 className="mainTitle classic-title">Description Mode</h1>

      <div className="card">
        <p>Read the description and guess the drink. You have 10 attempts.</p>
      </div>

      <div className="challenge-box" style={{ maxWidth: 720, width: '90%', textAlign: 'center' }}>
        <h2>Today's description</h2>
        <p>{dailyDescription.descripcion}</p>
      </div>

      {!gameOver && (
        <form onSubmit={handleGuessSubmit} className="guess-form" style={{ marginTop: 16 }}>
          <input
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
            placeholder="Type your guess and press Enter"
            className="guess-input"
            list="cocktails-list"
          />
          <datalist id="cocktails-list">
            {cocktails.map(c => <option key={c.id} value={c.nombre} />)}
          </datalist>
        </form>
      )}

      <div className="guesses-container">
        {guesses.map((g, i) => (
          <CocktailGuessRow key={i} guess={g} dailyCocktail={cocktails.find(c => c.id === dailyDescription.id)} />
        ))}
      </div>

      {gameOver && (
        <div className="game-over-box">
          <h2>{win ? "Correct!" : "Out of attempts"}</h2>
          <p>The drink was: <strong>{cocktails.find(c => c.id === dailyDescription.id).nombre}</strong></p>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Description;