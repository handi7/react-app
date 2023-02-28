import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="p-3 w-80 grow">
      <div className="border shadow">
        <Link to={`/product/${product?.id}`}>
          <img src={product?.image} alt="product" className="w-full p-1" />
        </Link>

        <Link to={`/product/${product?.id}`}>
          <div className="font-bold px-3 py-1">
            <h3>{product?.name}</h3>
          </div>
        </Link>

        <div className="font-bold text-green-500 px-3 py-1">
          <span>$ {product?.price}</span>
        </div>

        <Link
          to={`/product/${product?.id}`}
          className="flex justify-center bg-blue-500 text-white p-2 m-2"
        >
          View
        </Link>
      </div>
    </div>
  );
}
