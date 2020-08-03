import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
