import Image from "next/image";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { MdOutlinePostAdd } from "react-icons/md";

export default function Product({ product }) {
  const [hover, setHover] = useState(false);
  const { Title, img, money, items } = product;

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="relative w-[270px] h-96 cursor-pointer"
    >
      {hover && (
        <>
          <div className="absolute right-1 top-16 gap-y-3  flex flex-col">
            <MdOutlinePostAdd className="text-2xl bg-white px-2 py-2 w-auto h-auto rounded-full" />
            <AiOutlineSearch className="text-2xl bg-white px-2 py-2 w-auto h-auto rounded-full" />
            <AiOutlineHeart className="text-2xl bg-white px-2 py-2 w-auto h-auto rounded-full" />
          </div>
        </>
      )}
      <img
        className="w-[270px] h-[270px]"
        src={img[0]}
        onMouseOver={(e) => (e.target.src = img[1])}
        onMouseOut={(e) => (e.target.src = img[0])}
        alt="Product Photo"
      />
      <div className="flex flex-col gap-y-2 justify-center items-center mt-2">
        <p className="text-black/50 text-xl">{Title}</p>
        <p className="font-bold">${money}</p>
        <p>⭐⭐⭐⭐⭐</p>
      </div>
    </div>
  );
}
