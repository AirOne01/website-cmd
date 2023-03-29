import Link from "next/link";
import FancyGrid from "./fancyGrid";

const Section0 = () => {
  return (
    <section className="relative h-screen snap-center">
      <FancyGrid />
      <main className="absolute left-0 top-0 flex min-h-screen w-full flex-col items-center justify-center">
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
