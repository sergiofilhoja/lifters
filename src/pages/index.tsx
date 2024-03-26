import { Filter } from "@/components/Filters/Filter";
import Navbar from "@/components/navbar";
import { ListProducts } from "@/components/ProductList/ListProducts";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />

      <div className="mx-24">
        <div className="my-8">
          <span className="text-3xl text-white">Shop Men's</span>
          <p className="text-lg mt-2 text-white">
            Revamp your style with the latest designer trends in men’s
            <br /> clothing or achieve a perfectly curated wardrobe thanks to{" "}
            <br />
            our line-up of timeless pieces.{" "}
          </p>
        </div>
      </div>
      <div className="flex h-[100vh] bg-white justify-between px-20">
        <Filter />
        <ListProducts />
      </div>
    </div>
  );
}
