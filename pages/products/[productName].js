import { useRouter } from "next/router";

export default function ProductName() {
  const router = useRouter();
  const { productName } = router.query;
  return (
    <div className="h-screen">
      <h1>Product Nameee {productName}</h1>
    </div>
  );
}
