/** @format */

import React from "react";

const Throttling = () => {
  function throte(fn, delay) {
    let canRun = true; // flag
    return function (...arg) {
      if (!canRun) return;

      canRun = false;

      setTimeout(() => {
        canRun = true;
        fn.apply(this, arg);
      }, delay);
    };
  }
  const searchTxt = throte((text) => {
    console.log("search in time interval", text);
  }, 1000);
  return (
    <input
      type='text'
      onChange={(e) => {
        searchTxt(e.target.value);
      }}
    />
  );
};
export default Throttling;
