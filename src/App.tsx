import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import PeopleList from './components/PeopleList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        <>
          <PeopleList />
        </>
        </p>
      </header>
    </div>
  );
}

export default App;
