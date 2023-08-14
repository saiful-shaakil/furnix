import { addItemToCart } from "@/redux/features/cart/cartSlice";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { MdOutlinePostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";

export default function Product({ product }) {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const { name, img, money, items } = product;
  // to add item to cart
  const addItem = (product) => {
    dispatch(addItemToCart(product));
  };
  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="relative w-[270px] h-96 cursor-pointer"
    >
      {hover && (
        <>
          {items !== 0 ? (
            <div className="absolute right-1 top-16 gap-y-3  flex flex-col">
              <MdOutlinePostAdd
                onClick={() => addItem(product)}
                className="text-2xl bg-white px-2 py-2 w-auto h-auto rounded-full"
              />
              <AiOutlineSearch className="text-2xl bg-white px-2 py-2 w-auto h-auto rounded-full" />
              <AiOutlineHeart className="text-2xl bg-white px-2 py-2 w-auto h-auto rounded-full" />
            </div>
          ) : (
            <div className="absolute bg-secondary w-full text-center text-4xl font-bold ">
              Sold Out
            </div>
          )}
        </>
      )}
      <picture>
        <img
          className="w-[270px] h-[270px]"
          src={img[0]}
          onMouseOver={(e) => (e.target.src = img[1])}
          onMouseOut={(e) => (e.target.src = img[0])}
          alt="Product Photo"
        />
      </picture>
      <div className="flex flex-col gap-y-2 justify-center items-center mt-2">
        <p className="text-black/50 text-xl">{name}</p>
        <p className="font-bold">${money}</p>
        <p>⭐⭐⭐⭐⭐</p>
      </div>
    </div>
  );
}
