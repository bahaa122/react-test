import React from "react";
import logo from "./assests/logo.svg";
import { Calculator } from "./features/calculator/Calculator";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./pages/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img className="App-logo" width="5%" src={logo} />
        <h3>Welcome to the React Challenge</h3>
        <br />
        <Calculator />
      </header>
    </div>
  );
}

export default App;
