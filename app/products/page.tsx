import { Suspense } from "react";
import { getAllProducts } from "@/lib/sanity-queries";
import ProductsClient from "./ProductsClient";

export default async function ProductsPage() {
  const products = await getAllProducts();
  return (
    <Suspense>
      <ProductsClient products={products} />
    </Suspense>
  );
}
