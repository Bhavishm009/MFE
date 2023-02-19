import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import Hello from "./Hello";
import Compute from 'host/Compute'
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote</div>
    <div>Framework: react</div>
    <Counter/>
    <Hello/>
    <Compute/>
   
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
