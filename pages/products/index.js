import Head from "next/head";
import bannerShop from "../../src/assets/banner-shop.webp";
import Product from "../../src/sections/OurProducts/Product";
import GetData from "../../src/utils/dataFetcher";
export default function Products() {
  const api = "products.json";
  const [data, error, loading] = GetData(api, "allProducts");
  return (
    <div>
      <Head>
        <title>Shop | Furnix</title>
        <meta property="description" content="Shop" />
      </Head>
      {/* Banner section */}
      <section
        className="flex flex-col justify-center items-center h-[160px] md:h-[300px] lg:h-[380px]"
        style={{
          backgroundImage: `url(${bannerShop.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl">Shop</h1>
          <h2 className="text-xl mt-2">
            <span className="text-primary">
              Home &nbsp; &nbsp; / &nbsp; &nbsp;{" "}
            </span>
            <span className="text-gray-500">Products</span>
          </h2>
        </div>
      </section>
      {/* second section: products and filter */}
      <section className="flex common-width my-20">
        <div className="flex-[0.25] hidden sm:block">
          <div>
            <h1 className="text-xl mb-4">Categories</h1>{" "}
            <ul className="flex flex-col gap-y-3 text-gray-400">
              <li className="cursor-pointer">All</li>
              <li className="cursor-pointer">Decor</li>
              <li className="cursor-pointer">Interior</li>
              <li className="cursor-pointer">Life Syle</li>
              <li className="cursor-pointer">More</li>
            </ul>
          </div>
          {/* second filter option */}
          <div className="mt-20">
            <h1 className="text-xl mb-4">Filters</h1>{" "}
            <ul className="flex flex-col gap-y-3 text-gray-400">
              <li className="cursor-pointer">&0-$50</li>
              <li className="cursor-pointer">&50-$100</li>
              <li className="cursor-pointer">&100-$150</li>
              <li className="cursor-pointer">&150-$500</li>
            </ul>
          </div>
          {/* third filter option */}
          <div className="mt-20 ">
            <h1 className="text-xl mb-4">Sort By</h1>{" "}
            <ul className="flex flex-col gap-y-3 text-gray-400">
              <li className="cursor-pointer">High to Low Price</li>
              <li className="cursor-pointer">Low to High Price</li>
              <li className="cursor-pointer">A to Z</li>
              <li className="cursor-pointer">Z to A</li>
            </ul>
          </div>
        </div>
        {/* Products */}
        <div className="flex-1 sm:flex-[0.75]">
          <div className="flex justify-between items-center mb-10">
            <div>
              <select name="Sort" id="" className="focus:outline-none">
                <option value="All Products">All Products</option>
                <option value="Best Selling">Best Selling</option>
                <option value="New Arrivals">New Arrivals</option>
              </select>
            </div>
            <div>Filter</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center sm:place-items-stretch">
            {data?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
