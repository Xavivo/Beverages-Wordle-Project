import React from "react";
import './App.css'
import Footer from './footer.jsx'

function CocktelMode() {
  return (
    <div className="app-background" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
      <h1 className="mainTitle" style={{ marginTop: '48px', textAlign: 'center' }}>Cocktail Mode</h1>
      <p style={{ textAlign: 'center' }}>This is the cocktail mode of the game.</p>
      <Footer />
    </div>
  );
}
export default CocktelMode;