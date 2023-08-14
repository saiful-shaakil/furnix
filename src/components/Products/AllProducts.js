import { useGetProductsQuery } from "@/redux/features/product/productApi";
import React from "react";
import Product from "./Product";

export default function AllProducts() {
  const { data, isLoading } = useGetProductsQuery({ state: "all-products" });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
      {data?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
