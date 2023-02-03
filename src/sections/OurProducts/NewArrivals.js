import GetData from "../../utils/dataFetcher";
import Product from "./Product";

export default function NewArrivals() {
  const api = "products.json";
  const [data, error, loading] = GetData(api, "newArrivals");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
      {data?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
