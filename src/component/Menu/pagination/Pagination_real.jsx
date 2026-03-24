/** @format */
import { useState, useEffect } from "react";
import "./styles.css";
const ProdctCard = ({ image, title }) => {
  return (
    <div className='product-card'>
      <img src={image} alt={title} className='product-img' />
      <span>{title}</span>
    </div>
  );
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
  const handlePageNo = (n) => {
    setCurrentPage(n);
  };
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className='App'>
      <h1>Pagination</h1>
      <div className='pagination-container'>
        {[...Array(noOfPages).keys()].map((n) => (
          <span
            key={n}
            className={"page-number" + (n == currentPage ? " active" : "")}
            onClick={() => {
              handlePageNo(n);
            }}>
            {n + 1}
          </span>
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
