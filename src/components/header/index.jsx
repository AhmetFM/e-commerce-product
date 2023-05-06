import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Navbar from "../navbar";
import Cart from "../cart";

function Header({ lastCount }) {
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState(lastCount);

  useEffect(() => {
    setCartItems(lastCount);
  }, [lastCount]);

  function handleCart() {
    setCart(!cart);
  }

  return (
    <div className="md:w-10/12  w-full md:px-0 px-6 m-auto py-3 flex border-b border-darkGrayishBlue mb-0 md:mb-16">
      <div className="flex text-center justify-center items-center">
        <div className="cursor-pointer flex md:hidden">
          <Image
            src="/images/icon-menu.svg"
            alt="Menu"
            width={16}
            height={15}
          />
        </div>

        <div className="font-bold text-3xl ml-4 md:ml-0">
          <Link href="/">sneakers</Link>
        </div>
        <Navbar />
      </div>
      <div className="flex ml-auto gap-4 md:gap-8 items-center relative">
        <div className="" onClick={handleCart}>
          <div className="relative">
            <Image
              className="cursor-pointer"
              src="/images/icon-cart.svg"
              alt="Cart"
              width={22}
              height={20}
            />
            <span className="absolute -top-2 z-10 bg-orange text-white text-xs px-2 -right-2 rounded-full">
              {cartItems ? cartItems : ""}
            </span>
          </div>
          {cart && (
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              lastCount={lastCount}
            />
          )}
        </div>
        <div className="cursor-pointer w-6 h-6 md:w-12 md:h-12 relative object-cover rounded-full hover:border-2 hover:scale-110  border-orange">
          <Image src="/images/image-avatar.png" alt="Cart" fill />
        </div>
      </div>
    </div>
  );
}

export default Header;
