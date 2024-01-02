import './App.css';
import Weather from "./Weather.js";
import React from "react";
import SquareLoader from "react-spinners/SquareLoader";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello, my name is Anna Dowding. </h1>
        <Weather />
        <SquareLoader color="white" />
      </header>
    </div>
  );
}

export default App;
