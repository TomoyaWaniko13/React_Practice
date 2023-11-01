// React package that we need to write React
import React from "react";
// Connect the React package to the DOM.
import ReactDOM from "react-dom/client";
// ./index.css is where we add all our css for our app.
import "./index.css";
// <App /> is in the render function below.
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Hello World</h1>
    <p>This is a test....!!!</p>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
