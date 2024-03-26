import { IProduct } from "@/types/IProducts";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const foto = product.fotos.filter((foto) => {
    if (foto.capa) return foto.url;
  });

  function handleRedirectProductPage() {
    dispatch({ type: "PRODUCT_ACTION", payload: product });
    router.push("/product");
  }

  return (
    <div
      className="rounded-lg w-64 h-64 cursor-pointer"
      onClick={handleRedirectProductPage}
    >
      <Image
        src={foto[0].url}
        alt={product.titulo}
        width={264}
        height={264}
        objectFit="contain"
      />
      <div className="mt-2 justify-between flex items-center">
        <h3 className="text-black text-lg font-semibold">{product.titulo}</h3>
        <h3 className="text-black text-md font-semibold">
          {product.tamanhos[0]}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
