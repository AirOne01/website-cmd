import Link from "next/link";
import FancyGrid from "./fancyGrid";

const Section0 = () => {
  return (
    <section className="snap-center h-screen">
      <FancyGrid />
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-bold">
          Erwann Lagouche&apos;s portfolio
        </h1>
        <p className="mt-8">Welcome to my humble abode</p>
        <Link href={"blog"} className="blur-bold mt-6 uppercase">
          Enter
        </Link>
      </main>
    </section>
  );
};

export default Section0;
