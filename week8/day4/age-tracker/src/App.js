import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AgeDisplay from './components/AgeDisplay';
import AgeControls from './components/AgeControls';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center">Age Tracker</h1>
      <AgeDisplay />
      <AgeControls />
    </div>
  );
}

export default App;
