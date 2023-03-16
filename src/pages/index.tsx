import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import BasicPage from "~/components/BasicPage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Erwann Lagouche</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicPage>
        <h1 className="text-3xl font-bold">Erwann Lagouche&apos;s portfolio</h1>
        <p className="mt-8">Welcome to my humble abode</p>
        <Link href={"projects"} className="mt-6 uppercase blur_bold">Enter</Link>
      </BasicPage>
    </>
  );
};

export default Home;
