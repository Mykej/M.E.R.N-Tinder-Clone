import React from 'react';
import '../src/css/App.css';
import Header from './Header';
import TinderCards from '../src/TinderCards';

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <Header />
      <TinderCards />
      {/* SwipeButtons */}
    </div>
  );
}

export default App;
