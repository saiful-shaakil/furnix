import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { BiCart } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import NavLinks from "./Navlinks";
import {
  calculateTotalInCart,
  showCart,
} from "@/redux/features/cart/cartSlice";
import { displayLogin } from "@/redux/features/auth/authSlice";
import Login from "@/components/Authentication/Login";
import Register from "@/components/Authentication/Register";
import CartSidebar from "../Cart";
const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const [isScrolling, setIsScrolling] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    dispatch(calculateTotalInCart());
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, cart?.cartItems]);

  // to show cart
  const displayCart = () => {
    dispatch(showCart(true));
  };
  // to show login page
  const showLoginPage = () => {
    if (session) {
      router.push("/my-account");
    } else {
      dispatch(displayLogin(true));
    }
  };
  return (
    <nav className={`z-10 w-full ${isScrolling ? "bg-white fixed" : "sticky"}`}>
      {cart?.showCart && <CartSidebar />}
      {/* to handle login and register using redux */}
      {auth?.displayLoginPage && <Login />}
      {auth?.displayRegisterPage && <Register />}
      <div className="flex items-center font-medium justify-around">
        <div className="p-5 md:w-auto w-full flex justify-between">
          <h1 className="font-pacifico text-4xl cursor-pointer pb-4">Furnix</h1>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <HiOutlineXMark className="cursor-pointer" />
            ) : (
              <AiOutlineMenu className="cursor-pointer" />
            )}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8">
          <NavLinks />
        </ul>
        <div className="md:flex justify-end text-3xl gap-5 hidden">
          <AiOutlineSearch className="cursor-pointer" />
          <MdManageAccounts
            onClick={() => showLoginPage()}
            className="cursor-pointer"
          />
          <div className="relative">
            <span className="cursor-pointer" onClick={() => displayCart()}>
              <span
                className={`absolute text-[18px] -mt-5 ${
                  cart?.totalProduct < 10 ? "right-2" : "right-1"
                }`}
              >
                {cart?.totalProduct}
              </span>
              <BiCart className="cursor-pointer" />
            </span>
          </div>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white  z-10 fixed bottom-0 overflow-y-auto w-full top-0 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li className="p-5 md:w-auto w-full flex justify-between">
            <h1 className="font-pacifico text-4xl cursor-pointer pb-4">
              Furnix
            </h1>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              {open ? (
                <HiOutlineXMark className="cursor-pointer" />
              ) : (
                <AiOutlineMenu className="cursor-pointer" />
              )}
            </div>
          </li>
          <NavLinks />
          <div className="py-5 px-5">
            <button className="bg-secondary px-2 py-1 w-full rounded-full hover:bg-primary mt-7 font-bold">
              Log In
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
