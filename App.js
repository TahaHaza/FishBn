import React from "react";
import Header from "./Header";
import Headercolor from "./Header";
import "./App.css"

function App() {
  return (
    // BEM
    <div className="app">
      <Header />
      <Headercolor />
    </div>
  );
}

export default App;
