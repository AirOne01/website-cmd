import Link from "next/link";
import Image from "next/image";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="blur-bold flex grow-0 items-center justify-evenly">
        <Link href={"/"}>Main page</Link>
        <Link href={"/blog"}>Blog</Link>
      </nav>
      <main className="flex min-h-full grow flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex grow-0 justify-between p-4 border-t border-[#333333]">
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
