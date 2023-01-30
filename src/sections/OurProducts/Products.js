import { useState } from "react";
import AllProducts from "./AllProducts";
import BestSellers from "./BestSellers";
import NewArrivals from "./NewArrivals";

export default function Products() {
  const [state, setState] = useState("All Products");
  let data;
  if (state === "All Products") {
    data = <AllProducts />;
  }
  if (state === "New Arrivals") {
    data = <NewArrivals />;
  }
  if (state === "Best Sellers") {
    data = <BestSellers />;
  }
  return (
    <section>
      <div className="flex justify-center items-center gap-5 my-10 text-sm md:text-2xl">
        <option
          className={`cursor-pointer ${
            state === "All Products" && "text-primary"
          }`}
          onClick={(e) => setState(e.target.value)}
        >
          All Products
        </option>
        <option
          className={`cursor-pointer ${
            state === "Best Sellers" && "text-primary"
          }`}
          onClick={(e) => setState(e.target.value)}
        >
          Best Sellers
        </option>
        <option
          className={`cursor-pointer ${
            state === "New Arrivals" && "text-primary"
          }`}
          onClick={(e) => setState(e.target.value)}
        >
          New Arrivals
        </option>
      </div>
      {data}
    </section>
  );
}
