import Head from "next/head";
import bannerShop from "../../src/assets/banner-shop.webp";
export default function Products() {
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
        <div className="flex-[0.25]">
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
        </div>
        {/* Products */}
        <div className="flex-[0.75]">
          <div>Sort</div>
          <div>AllProducts</div>
        </div>
      </section>
    </div>
  );
}
