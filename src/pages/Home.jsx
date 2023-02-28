import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
import { API_URL } from "../data/constants";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const res = await axios.get(`${API_URL}/products/?page=1&limit=10`);
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <h1 className="font-bold mx-3">Products</h1>

      <div className="flex flex-wrap justify-center">
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
}
