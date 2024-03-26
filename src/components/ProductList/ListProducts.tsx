import api from "@/services/api";
import { IProduct } from "@/types/IProducts";
import { useMemo } from "react";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";

async function getProducts() {
  const { data } = await api.get("/desafio_front_end");
  return data;
}

export function ListProducts() {
  const { data } = useQuery("products", getProducts);
  const products: IProduct[] = useMemo(() => data, [data]);

  return (
    <div className="flex flex-wrap gap-6 w-[70%] mt-24">
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
