import { Fira_Code } from "next/font/google";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Erwann Lagouche",
  description: "My portfolio",
  authors: [{ name: "Erwann Lagouche", url: "https://github.com/AirOne01" }],
  generator: "Next.js",
  creator: "Erwann Lagouche",
  keywords: ["portfolio", "next.js", "tailwindcss"],
  colorScheme: "dark",
};
import "styles/globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`min-h-screen w-full bg-black ${fira.className} whitespace-pre-line text-white`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
