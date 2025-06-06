import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {

    axios.get("https://fakestoreapi.com/products")
    .then((response) => {
      setProducts(response.data);
      console.log(response);
    })
    .catch((error) => {
      
      console.log("uuuuhhh", error);
    });
  }
  , []);

  return (
    <div className="ProductListPage">
      {products.map((product) => (
        
          <Link to={`/product/details/${product.id}`} key={product.id}>
            <div className="card">
              <h2>{product.title}</h2>
              <img src={product.image} alt="lalalallala" />
              <p>${product.price}</p>
              <p>{product.description}</p>
            </div>
          </Link>
        
      ))}
      
    </div>
  );
}

export default ProductListPage;
