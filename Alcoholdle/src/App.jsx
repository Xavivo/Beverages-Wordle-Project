import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/logo.svg'
import './App.css'
import Button from './button.jsx'
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
          <Button />
          <Button />
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Button />
          <Button />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
