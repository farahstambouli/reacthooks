
import './App.css';
import React from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

function App() {
  return (
    <div className="App">
      <h1>My Movie App</h1>
      <Filter />
      <MovieList />
    </div>
  );
}

export default App;
