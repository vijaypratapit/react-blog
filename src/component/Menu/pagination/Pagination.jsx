/** @format */
import React, { useState, useEffect, useCallback } from "react";
import "./styles.css";
let i = 0;
const ProdctCard = React.memo(({ image, title }) => {
  console.log("Product card", i++);
  return (
    <div className='product-card'>
      <img src={image} alt={title} className='product-img' />
      <span>{title}</span>
    </div>
  );
});
const PageButton = React.memo(({ n, isActive, onClick }) => {
  console.log("render btn", n);
  return (
    <span
      className={"page-number" + (isActive ? " active" : "")}
      onClick={() => onClick(n)}>
      {n + 1}
    </span>
  );
});
const TimeDisplay = () => {
  // const [time, setTime] = useState(Date.now());
  // useEffect(() => {
  //   const id = setInterval(() => {
  //    // setTime(Date.now());
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);
  // console.log("Time render");
  // return <h1>Pagination Time: {time}</h1>;
};
const Pagination = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://dummyjson.com/products?limit=500");
      const json = await data.json();
      setProducts(json.products);
      setLoading(false);
    };
    fetchData();
  }, []);
  const PAGE_SIZE = 10;
  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const handlePageNo = useCallback((n) => {
    setCurrentPage(n);
  }, []);
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className='App'>
      <TimeDisplay />
      <h1>Pagination </h1>
      <div className='pagination-container'>
        {[...Array(noOfPages).keys()].map((n) => (
          <PageButton
            key={n}
            n={n}
            isActive={n === currentPage}
            onClick={handlePageNo}
          />
        ))}
      </div>
      <div className='product-container'>
        {Array.isArray(products) &&
          products
            .slice(start, end)
            .map((p) => (
              <ProdctCard key={p.id} image={p.thumbnail} title={p.title} />
            ))}
      </div>
    </div>
  );
};
export default Pagination;
