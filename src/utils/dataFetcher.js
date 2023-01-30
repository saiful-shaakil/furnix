import useSWR from "swr";
// const fetcher = async () => {
//   const response = await fetch("products.json");
//   const data = await response.json();
//   return data;
// };

const GetData = (api) => {
  const { data, error, loading } = useSWR("allproducts", async () => {
    const response = await fetch(`${api}`);
    const data = await response.json();
    return data;
  });
  return [data, error, loading];
};
export default GetData;
