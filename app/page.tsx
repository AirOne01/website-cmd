import { type NextPage } from "next";
import Link from "next/link";
import FancyGrid from "./FancyGrid";

const Home: NextPage = () => {
  return (
    <>
      <FancyGrid />
      <main className="flex flex-col items-center justify-center min-h-screen w-full">
        <h1 className="text-3xl font-bold text-center z-0">Erwann Lagouche&apos;s portfolio</h1>
        <p className="mt-8 z-0">Welcome to my humble abode</p>
        <Link href={"blog"} className="blur-bold mt-6 uppercase">
          Enter
        </Link>
      </main>
    </>
  );
};

export default Home;
