import Details from "@/components/details";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Images from "@/components/images";
import { Kumbh_Sans } from "next/font/google";
import { useState } from "react";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(0);
  const [lastCount, setLastCount] = useState(count);
  function handleSubmit() {
    setLastCount(count);
  }

  return (
    <main className={` flex flex-col max-w-6xl m-auto ${kumbhSans.className}`}>
      <Header lastCount={lastCount} />
      <div className="md:w-10/12 ml-0 md:ml-20 flex md:flex-row flex-col w-full">
        <Images />
        <div className="flex ml-auto float-right">
          <Details
            count={count}
            setCount={setCount}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
