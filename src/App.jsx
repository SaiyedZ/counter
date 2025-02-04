import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return (
    <>
      <style>
        {`
          body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background-color: #f0f4f8; /* Light background for a clean, minimal look */
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              color: #333;
          }

          .counter-container {
              text-align: center;
              background: linear-gradient(135deg, #ffffff, #d6e1f2); /* Soft gradient background */
              padding: 40px;
              border-radius: 20px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Larger shadow for a more elevated look */
              width: 600px;
              border: 1px solid #e1e1e1; /* Soft border for separation */
          }

          h1 {
              font-size: 42px;
              margin-bottom: 20px;
              font-weight: bold;
              color: #1f3a5e; /* Darker header for emphasis */
              letter-spacing: 1px;
          }

          .counter-value {
              font-size: 70px;
              font-weight: 600;
              margin-bottom: 30px;
              color: #3e4c59; /* Slightly darker color for the counter */
          }

          .buttons {
              display: flex;
              justify-content: center;
              margin-top: 20px;
              gap: 25px; /* Increased space for a more spacious layout */
          }

          .btn {
              padding: 14px 32px;
              font-size: 20px;
              cursor: pointer;
              border: none;
              border-radius: 12px;
              transition: all 0.3s ease-in-out;
              color: white;
              font-weight: bold;
              box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
              text-transform: uppercase;
              letter-spacing: 1px;
          }

          .btn:hover {
              transform: translateY(-5px); /* Larger hover lift effect */
              box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
          }

          .btn:active {
              transform: translateY(2px); /* Slightly press down effect on click */
              box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          }

          #increment {
              background: linear-gradient(135deg, #8E24AA, #6A1B9A); /* Elegant purple gradient */
          }

          #decrement {
              background: linear-gradient(135deg, #009688, #00796B); /* Sophisticated teal gradient */
          }

          #reset {
              background: linear-gradient(135deg, #FF7043, #D32F2F); /* Calming orange gradient */
          }

        `}
      </style>

      <div className="counter-container">
        <h1>Counter</h1>
        <div className="counter-value">{counter}</div>
        <div className="buttons">
          <button className="btn" id="increment" onClick={increment}>
            Increment
          </button>
          <button className="btn" id="reset" onClick={reset}>
            Reset
          </button>
          <button
            className="btn"
            id="decrement"
            onClick={() => {
              if (counter === 0) return;
              decrement();
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
