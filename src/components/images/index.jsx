import React, { useState } from "react";
import { data } from "../../../data";
import Image from "next/image";

function Images() {
  const [products] = useState(data);
  const [index, setIndex] = useState(1);
  const [active, setActive] = useState(1);

  function handleChange(id) {
    setIndex(id);
    setActive(id);
  }

  function decrementImage() {
    if (index !== 1) {
      setIndex(index - 1);
    } else {
      setIndex(products.length);
    }
  }

  function incrementImage() {
    if (index !== products.length) {
      setIndex(index + 1);
    } else {
      setIndex(1);
    }
  }

  return (
    <div className="h-full">
      <div className="relative md:w-[400px] md:h-[400px] w-[100%] h-auto object-contain ">
        <Image
          className="rounded-0 md:rounded-2xl"
          src={`/images/image-product-${products[index - 1].id}.jpg`}
          alt="image"
          fill
        />
        <button
          className="flex md:hidden absolute top-2/4 left-6 bg-white justify-center items-center p-4 rounded-full"
          onClick={decrementImage}
        >
          <Image
            src="/images/icon-previous.svg"
            alt=""
            width={16}
            height={16}
          />
        </button>
        <button
          className="flex md:hidden absolute top-2/4 right-6 bg-white justify-center items-center p-4 rounded-full"
          onClick={incrementImage}
        >
          <Image src="/images/icon-next.svg" alt="" width={16} height={16} />
        </button>
      </div>
      <div className="h-auto mt-0 md:mt-8 flex justify-center md:ml-0">
        <ul className="gap-2 sm:gap-4 hidden md:flex ">
          {products.map((product, index) => (
            <li
              key={index}
              className="cursor-pointer rounded-xl hover:opacity-50 transition-all"
              onClick={() => handleChange(product.id)}
            >
              <Image
                className={
                  index === active - 1
                    ? `border-2 border-orange rounded-xl`
                    : "rounded-xl"
                }
                src={`/images/image-product-${product.id}-thumbnail.jpg`}
                alt="image"
                width={100}
                height={100}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Images;
