import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Instructions from './components/Instructions';
import ImageContainer from './components/ImageContainer';
import Footer from './components/Footer';
import GameState from './context/GameState';
import './App.css';

function App() {
  return (
    <GameState>
      <Wrapper>
        <Header />
        <Instructions />
        <ImageContainer />
        <Footer />
      </Wrapper>
    </GameState>
  );
}

export default App;
