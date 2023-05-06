import Image from "next/image";
import React, { useState } from "react";

function Details({ count, setCount, handleSubmit }) {
  function decrementCount() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div className="ml-6 md:ml-28 mt-10 md:mt-20">
      <div className="text-orange font-bold uppercase text-sm gap-1 flex mb-4">
        <span>Sneaker</span>
        <span>Company</span>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-5xl">Fall Limited Edition Sneakers</h1>{" "}
        <span className="text-darkGrayishBlue">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </span>
      </div>
      <div className="mt-8 flex md:flex-col justify-between mx-4 ">
        <div className="items-center gap-4 flex">
          <span className="font-bold text-3xl">$125.00 </span>
          <span className="text-orange font-bold bg-paleorange px-2 rounded-lg">
            50%
          </span>
        </div>
        <span className="font-bold line-through text-grayishBlue mt-2 text-md">
          $250.00
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-8">
        <div className="flex bg-lightGrayishBlue py-3 px-4 justify-between rounded-xl mb-4">
          <button onClick={decrementCount} className="mr-10">
            <Image
              src="/images/icon-minus.svg"
              alt="minus"
              width={12}
              height={12}
            />
          </button>
          <span className="text-lg font-bold mr-10 ">{count}</span>
          <button onClick={incrementCount}>
            <Image
              src="/images/icon-plus.svg"
              alt="plus"
              width={12}
              height={12}
            />
          </button>
        </div>
        <button
          className="text-white gap-3 bg-orange fill-white select-none flex items-center justify-center py-3 rounded-xl px-20 cursor-pointer hover:opacity-50 transition-all"
          onClick={handleSubmit}
        >
          <Image
            src="/images/icon-cart.svg"
            alt="cart"
            width={22}
            height={22}
          />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Details;
