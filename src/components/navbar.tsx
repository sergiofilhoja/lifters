import { RootState } from "@/reducers";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdDelete, MdOutlineLocalMall } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Navbar: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const listProducts: any = useSelector((state: RootState) => state.cart);

  // States
  const [cartActive, setCartActive] = useState(false);

  function handleActiveCart() {
    setCartActive(!cartActive);
  }

  function handleRemoveItemToCart(product: any) {
    dispatch({ type: "REMOVE_PRODUCT", payload: product });
    setCartActive(!cartActive);
  }

  return (
    <>
      <nav className="bg-black border-b-[1px] border-[#707070]">
        <div className="mx-24 py-4 px-6 lg:px-8">
          <div className="flex justify-between py-4">
            <div className="flex gap-9 items-center">
              <a
                className="text-white text-2xl font-bold cursor-pointer"
                onClick={() => router.push("/")}
              >
                Lifters Shop
              </a>
              <a className="text-white text-xl cursor-pointer">Shop</a>
              <a className="text-white text-xl cursor-pointer">Stories</a>
              <a className="text-white text-xl cursor-pointer">About</a>
            </div>
            <div className="flex flex-row items-center gap-10">
              <MdOutlineLocalMall
                color="white"
                size={20}
                className="cursor-pointer"
                onClick={handleActiveCart}
              />
              <span className="text-white text-xl cursor-pointer">Login</span>
            </div>
          </div>
        </div>
      </nav>

      {cartActive && (
        <div className="bg-black w-[400px] p-3 absolute right-6 mt-5">
          {listProducts.items.map((product, index) => (
            <div
              key={index}
              className="flex flex-row justify-around border-b-2 border-[rgba(255, 255, 255, 0.5)] pb-3 pt-3"
            >
              <div className="w-[64px] h-[64px] bg-white" />
              <div className="flex flex-col justify-between">
                <span className="text-white text-xl">
                  {product.data.titulo}
                </span>
                <div className="flex flex-row items-center gap-6">
                  <span className="text-white border-2 border-white">
                    {product.data.tamanhos[0]}
                  </span>
                  <div className="w-[20px] h-[20px] bg-purple-700 rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-col justify-between items-end">
                <span className="text-white text-xl font-semibold">
                  {product.data.valor}
                </span>
                <MdDelete
                  size={20}
                  color="white"
                  onClick={() => handleRemoveItemToCart(product.data.titulo)}
                />
              </div>
            </div>
          ))}

          <div className="flex flex-row justify-between py-4">
            <span className="text-white text-xl">Total:</span>
            <span className="text-white text-xl font-semibold">
              $
              {listProducts.items.reduce((total, item) => {
                const value = parseFloat(item.data.valor.replace(/\$/g, ""));
                return total + value;
              }, 0)}
            </span>
          </div>

          <button className="text-black bg-white w-full py-3">Checkout</button>
        </div>
      )}
    </>
  );
};

export default Navbar;
