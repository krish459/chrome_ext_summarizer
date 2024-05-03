import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.innerHtml(
//   <React.StrictMode>
//     <h1>krish krish</h1>
//     <App />
//   </React.StrictMode>
// );

const rootElement = document.createElement("div");
rootElement.id = "react-chrome-app";

const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
  #${rootElement.id} {
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background: #f9f9f9;
  border-right: 1px solid #c2c2c2;
  z-index: 999;
  }
`;
rootElement.appendChild(globalStyles);
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
