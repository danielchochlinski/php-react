import React, { useEffect, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import axios from "axios";
import "./styles/app.scss";
const App = () => {
  const rootElement = document.getElementById("root");

  if (rootElement) {
    const numbersData: any = rootElement.getAttribute("data-numbers");
    const numbers = JSON.parse(numbersData);
    console.log(numbers);

    
    const [fetch, setFetch] = useState([]);
    const fetchFn = async () => {
      try {
        const response = await axios("/api/numbers");
        setFetch(response.data);
      } catch (err) {
        console.error(err);
        console.log("ups there has been an error");
      }
    };
    useEffect(() => {
      fetchFn();
    }, []);
    console.log(fetch);
    return (
      <div className="container">
        <div>
          <h1>HELLO</h1>
          <ul>
            {numbers.map((number: number) => (
              <li key={number}>{number}</li>
            ))}
          </ul>
        </div>
        <div>
          <h1>AXIOS</h1>
          <ul>
            {fetch?.map((number: number) => (
              <li key={number}>{number}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return null; // Return null if rootElement is not found
};

const root = document.getElementById("root");
if (root) {
  const reactRoot = createRoot(root);
  reactRoot.render(<App />);
}
