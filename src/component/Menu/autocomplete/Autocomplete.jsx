/** @format */

import React, { useEffect, useState } from "react";
import "./styles.css";
const Autocomplete = () => {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState([]);
  const [isShow, setShow] = useState(false);
  const [cached, setCached] = useState({});
  const fetchData = async () => {
    if (cached[input]) {
      console.log("data come from cached", cached);
      setResult(cached[input]);
      return;
    }
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setResult(json?.recipes);
    setCached((prev) => ({ ...prev, [input]: json?.recipes }));
  };
  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);
  return (
    <div className='App'>
      <h1>Autocomplete Search Bar</h1>
      <div>
        <input
          type='text'
          value={input}
          className='search-input'
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
        />
        {isShow && (
          <div className={`result-container`}>
            {result?.map((r) => (
              <span className='result' key={r.id}>
                {r.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Autocomplete;
