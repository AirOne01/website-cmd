import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Erwann Lagouche&apos;s portfolio</h1>
      <p className="mt-8">Welcome to my humble abode</p>
      <Link href={"projects"} className="blur_bold mt-6 uppercase">
        Enter
      </Link>
    </main>
  );
};

export default Home;
