import Navbar from "@/components/navbar";
import { RootState } from "@/reducers";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdOutlineLocalMall } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export default function Product() {
  const product = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
  const router = useRouter();

  function handleAddProductToCart() {
    dispatch({ type: "ADD_PRODUCT", payload: product });
    alert("Produto adicionado ao carrinho!");
    router.push("/");
  }

  return (
    <div className="bg-white h-[100vh]">
      <Navbar />

      <div className="flex flex-row justify-center items-center gap-7 px-14">
        <div className="flex flex-row mt-32 gap-12">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-[70%]">
            {product?.data?.fotos.map((fotos, index) => (
              <Image
                key={index}
                className="bg-gray-300"
                width={300}
                height={300}
                alt="imagens"
                src={fotos.url}
              />
            ))}
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="text-black text-4xl">
                {product?.data?.titulo}
              </span>
              <span className="text-black text-lg mt-2">
                {product?.data?.valor}
              </span>
              <span className="text-black text-lg mt-6 w-[450px]">
                {product?.data?.descricao}
              </span>

              {/* Cores */}
              <span className="text-lg text-black mt-6">Color</span>
              <div className="flex flex-row flex-wrap gap-4 mt-6">
                {product?.data.cores.map((cor, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: cor.codigo,
                      borderRadius: 99,
                      width: 64,
                      height: 64,
                    }}
                  />
                ))}
              </div>

              {/* Tamanhos */}
              <span className="text-lg text-black mt-6">Size</span>
              <div className="flex flex-row flex-wrap gap-4 mt-6">
                {product?.data.tamanhos.map((tamanho, index) => (
                  <span
                    key={index}
                    className="text-black border-2 p-2 border-black"
                  >
                    {tamanho}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-row items-center gap-6 w-full">
              <button
                className="text-white bg-black py-3 w-[70%] flex flex-row items-center gap-3 justify-center"
                onClick={handleAddProductToCart}
              >
                <MdOutlineLocalMall size={20} />
                Add to bag
              </button>
              <button className="text-black bg-[#DAE1EA] py-3 w-[30%]">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
