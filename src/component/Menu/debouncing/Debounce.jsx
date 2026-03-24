/** @format */

import React from "react";

const Debounce = () => {
  function debunce(fn, delay) {
    let timer;
    return function (...arg) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, arg);
      }, delay);
    };
  }
  const searchTxt = debunce((text) => {
    console.log("search the txt", text);
  }, 3000);

  return <input type='text' onChange={(e) => searchTxt(e.target.value)} />;
};

export default Debounce;
