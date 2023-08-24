import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const rootElement = document.getElementById("root");
  const numbersData = rootElement.getAttribute("data-numbers");
  const numbers = JSON.parse(numbersData);
  console.log(numbers); 
  return (
    <div>
      <h1>HELLO</h1>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<App />);
