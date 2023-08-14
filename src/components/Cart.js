"use client";
import {
  decreaseItemInCart,
  increaseItemInCart,
  removeItemFromCart,
  showCart,
} from "@/redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CartSidebar() {
  const { cartItems, totalProduct, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  // to hide the cart
  const hideCart = () => {
    dispatch(showCart(false));
  };
  // to increase the amount of item.
  const increaseQuantity = (id) => {
    // console.log(id);
    dispatch(increaseItemInCart(id));
  };
  // to decrease the amount of item.
  const decreaseQuantity = (id) => {
    dispatch(decreaseItemInCart(id));
  };
  // to remove the product from the cart
  const removeProduct = (id) => {
    dispatch(removeItemFromCart(id));
  };
  return (
    <>
      <div
        className="relative z-20"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        {totalProduct === 0 ? (
          <>
            <div className="fixed inset-0 overflow-hidden ">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <div className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex justify-center items-center h-full w-full flex-col">
                          <h1 className="text-center">
                            You have no products in cart.
                          </h1>{" "}
                          <button
                            className="underline text-center"
                            onClick={() => dispatch(showCart(false))}
                          >
                            Back to Shopping
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="fixed inset-0 overflow-hidden ">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <div className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <h2
                            className="text-lg font-medium text-gray-900"
                            id="slide-over-title"
                          >
                            Shopping Cart &nbsp;{`[${totalProduct} Items]`}
                          </h2>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              onClick={() => hideCart()}
                              type="button"
                              className=" -m-2 p-2 text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">Close panel</span>
                              <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {cartItems?.map((item) => (
                                <li key={item.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={`${item.img[0]}`}
                                      alt=""
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href="#">{item.name}</a>
                                        </h3>
                                        <p className="ml-4">${item.money}</p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className="space-y-1">
                                        <div className="text-sm dark:text-gray-400">
                                          <div className="border rounded-lg px-2 py-1">
                                            <button
                                              onClick={() =>
                                                decreaseQuantity(item.id)
                                              }
                                              className="text-xl text-primary"
                                            >
                                              -
                                            </button>
                                            <input
                                              className="text-black  text-center w-12 mx-2"
                                              value={item.amount}
                                              type="text"
                                              id="quantityValue"
                                            />
                                            <button
                                              onClick={() =>
                                                increaseQuantity(item.id)
                                              }
                                              className="text-xl text-success"
                                            >
                                              +
                                            </button>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="flex">
                                        <button
                                          onClick={() => removeProduct(item.id)}
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <div>
                            <p>Subtotal</p>
                          </div>
                          <div>
                            <p>${totalPrice}</p>
                          </div>
                        </div>
                        <div>
                          {" "}
                          <p className="mt-0.5 text-sm text-gray-500">
                            Shipping and taxes will be calculated at checkout.
                          </p>
                        </div>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p onClick={() => dispatch(showCart(false))}>
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              <span className="-rotate-180" aria-hidden="true">
                                &rarr;
                              </span>
                              Continue Shopping
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
