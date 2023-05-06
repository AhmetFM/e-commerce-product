import Image from "next/image";
import React, { useState } from "react";

function Cart({ cartItems, setCartItems, lastCount }) {
  function clearCart() {
    setCartItems();
  }
  function checkPrice() {
    let price = cartItems * 125.0;
    price.toFixed(2);
    return price;
  }
  return (
    <div className="absolute bg-white top-14 -right-3 md:top-16 md:-left-32 min-w-[350px]  md:w-4/5  md:h-56 shadow-2xl rounded-lg z-10">
      <div className="border-b border-grayishBlue px-6 py-4 font-bold">
        Cart
      </div>
      {cartItems ? (
        <div className="flex flex-col">
          <div className="flex p-4 gap-4">
            <div>
              <Image
                className="cursor-pointer rounded-md"
                src="/images/image-product-1-thumbnail.jpg"
                alt="Cart"
                width={52}
                height={52}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-darkGrayishBlue">
                Fall Limited Edition Sneakers
              </span>
              <span className="text-darkGrayishBlue">
                $125.00 x {cartItems}
                <span className="font-bold text-black ml-3">{`$${checkPrice()}.00`}</span>
              </span>
            </div>
            <button onClick={clearCart}>
              <Image
                className="cursor-pointer rounded-md"
                src="/images/icon-delete.svg"
                alt="Delete"
                width={16}
                height={16}
              />
            </button>
          </div>
          <button className="text-white rounded-xl bg-orange m-4 py-3">
            Checkout
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center h-40">
          <span className="font-bold text-grayishBlue">Your cart is empty</span>
        </div>
      )}
    </div>
  );
}

export default Cart;
