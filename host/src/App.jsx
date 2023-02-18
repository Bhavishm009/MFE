import React from "react";
import ReactDOM from "react-dom";
import Counter from 'remote/Counter'
import Hello from 'remote/Hello'
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    <div>Framework: react</div>
      <Counter/>
      <Hello/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
