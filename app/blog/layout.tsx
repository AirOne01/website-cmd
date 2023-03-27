import Link from "next/link";
import Image from "next/image";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full flex-col text-lg">
      <header className="flex w-full justify-between p-4">
        <section className="whitespace-pre-line leading-tight">
          <Link href={"/"} className="blur-bold">Erwann lagouche</Link><br />
          <span className="text-[#555] text-sm">Lyon, France</span>
        </section>
        <nav className="pr-4">
          <Link href={"/"} className="blur-bold">
            Index
          </Link>
          <Link href={"/blog"} className="blur-bold ml-4">
            Blog
          </Link>
        </nav>
      </header>
      <main className="flex min-h-full grow flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex justify-between border-t border-[#333] p-4">
        <p>Copyright © 2023 Erwann Lagouche - All right reserved</p>
        <Link href={"https://github.com/AirOne01"} target="_blank">
          <Image
            height={24}
            width={24}
            src="/github.svg"
            alt="Visit my Github"
          />
        </Link>
      </footer>
    </div>
  );
};

export default BlogLayout;
