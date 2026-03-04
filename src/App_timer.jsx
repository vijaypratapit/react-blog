/** @format */

import React, { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setTime(new Date().toLocaleTimeString());
    // }, 1000);
    // return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h1>Timer</h1>
      <input type='text' />
      <div>
        Time: <span>{time}</span>
      </div>
    </>
  );
}
