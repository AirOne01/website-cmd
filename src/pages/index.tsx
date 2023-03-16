import { type NextPage } from "next";
import Head from "next/head";
import { Fira_Code } from 'next/font/google'
import FadeInText from "~/components/FadeInText";

const fira = Fira_Code({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Erwann Lagouche</title>
        <meta name="description" content="My portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#030014] to-[#000000] ${fira.className} text-white whitespace-pre-line`}>
        <FadeInText>Hi there ! This page is currently a Work In Progress. Come back later.</FadeInText>
      </main>
    </>
  );
};

export default Home;
