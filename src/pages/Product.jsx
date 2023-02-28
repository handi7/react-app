import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../data/constants";
import Spinner from "../components/Spinner";

export default function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const getProduct = async (productId) => {
    try {
      const res = await axios.get(`${API_URL}/products/${productId}`);
      setProduct(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id]);

  if (loading) return <Spinner />;

  return (
    <div className="flex justify-center">
      <div style={{ width: 700 }}>
        <h1 className="font-bold text-xl py-3">{product?.name}</h1>
        <img className="w-full" src={product?.image} alt="product" />

        <div className="font-bold text-green-500 py-2">
          <span>$ {product?.price}</span>
        </div>

        <p>{product?.description}</p>
      </div>
    </div>
  );
}
