import { useState } from 'react'
import './App.css'
import Button from './button.jsx'
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Footer from './footer.jsx'

function App() {

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
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="mainTitle">Alcoholdle</h1>
      <p className="subTitle">
        <strong>¡Welcome to Alcoholdle, a fun twist on the classic word-guessing game!</strong>
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
        <div style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
          <Button text={"Classic"} subtitle={"Play the original mode!!!"} to="/classic" />
          <Button text={"Description"} subtitle={"Guess by a phrase"} to="/description" />
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Button text={"Siluette"} subtitle={"Guess from the outline!"} to="/siluette" />
          <Button text={"Cocktail mode"} subtitle={"Mix it up!"} to="/cocktail" />
        </div>
      </div>
  <Footer />
    </div>
  )
}

export default App
