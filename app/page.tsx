import { type NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import FancyGrid from "./fancyGrid";

const Home: NextPage = () => {
  return (
    <>
      <div className="h-screen">
        <FancyGrid />
        <main className="z-20 flex min-h-screen w-full flex-col items-center justify-center">
          <h1 className="text-center text-3xl font-bold">
            Erwann Lagouche&apos;s portfolio
          </h1>
          <p className="mt-8">Welcome to my humble abode</p>
          <Link href={"blog"} className="blur-bold mt-6 uppercase">
            Enter
          </Link>
        </main>
      </div>
      <div className="flex h-screen flex-col items-center justify-center text-4xl font-extrabold">
        <div className="flex h-1/2 w-full items-center justify-start">
          <div className="flex h-full w-1/2 flex-col items-center justify-center bg-[#9D2600] text-black">
            Hello world
          </div>
          <div className="flex h-full w-1/2 flex-col items-center justify-center">
            Hello world
          </div>
        </div>
        <div className="flex h-1/2 w-full items-center justify-start">
          <div className="flex h-full w-1/2 items-center justify-center text-black">
            <div className="relative h-full w-full">
              <div className="absolute left-0 top-0 h-full w-full">
                <Image
                  src={"/map.png"}
                  width={500}
                  height={100}
                  alt="Map of Lyon"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute left-0 top-0 z-50 flex h-full w-full items-end justify-start">
                <p className="bg-orange-500 px-4">Based in Lyon, France</p>
              </div>
            </div>
          </div>
          <div className="h-full w-1/2 bg-[#202927]"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
