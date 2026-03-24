/** @format */

import React, { useEffect, useState } from "react";
import "./styles.css";
const Practice = () => {
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(0);

  useEffect(() => {
    const fethDetails = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const details = await res.json();
      setData(details);
    };
    fethDetails();
  }, []);
  const PAGE_SIZE = 2;
  const noOfPage = Math.ceil(data.length) / PAGE_SIZE;
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const handleCallPageNo = (n) => {
    setcurrentPage(n);
  };
  return (
    <ul>
      {[...Array(noOfPage).keys()].map((n) => (
        <span
          className='page-no'
          onClick={() => {
            handleCallPageNo(n);
          }}>
          {n + 1}
        </span>
      ))}
      {data.slice(start, end).map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default Practice;
