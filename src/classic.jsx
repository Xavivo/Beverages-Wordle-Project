import React, { useState } from "react";
import './classic.css'
import Footer from './footer.jsx'

function Classic() {
  const [guess, setGuess] = useState('')

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

      <h1 className="mainTitle" style={{ marginTop: '48px', textAlign: 'center' }}>Classic Mode</h1>

      {/* Logo + short description row */}
      <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 8 }}>
        <img src="/logo.svg" alt="logo" style={{ width: 48, height: 'auto' }} />
        <p>Guess the beverage based on clues! You have 6 attempts to guess, revealing hints gradually. Good luck! </p>
        <img src="/logo.svg" alt="logo" style={{ width: 48, height: 'auto' }} />
      </div>

      {/* Card with text + subtext */}
      <div style={{ marginTop: 24, background: 'rgba(255,255,255,0.9)', padding: 20, borderRadius: 12, boxShadow: '0 6px 18px rgba(0,0,0,0.2)', maxWidth: 720, width: '90%', border: '2px solid rgba(0,0,0,0.8)' }}>
        <h2 style={{ margin: 0, color: '#333', fontSize: 34, fontFamily: 'Fontdiner Swanky', cursive: true }}>Today's challenge</h2>
        <p style={{ marginTop: 8, color: '#333', fontFamily: 'Quantico', sansSerif: true }}>Type any beverage to start.</p>
      </div>

      {/* Input box for guess */}
      <div style={{ marginTop: 20, width: '90%', maxWidth: 720, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Type your guess here"
          style={{ width: '100%', padding: '16px 12px', fontSize: 18, borderRadius: 8, border: '2px solid rgba(0,0,0,0.12)' }}
        />
        <div style={{ marginTop: 8, color: '#000000ff' }}>You typed: <strong>{guess}</strong></div>
      </div>

      {/* Yesterday placeholder */}
      <div style={{ marginTop: 24, width: '90%', maxWidth: 720, textAlign: 'center', color: '#222' }}>
        <em>Yesterday's beverage was: template</em>
      </div>

      <Footer />
    </div>
  );
}

export default Classic;