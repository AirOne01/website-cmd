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

import "styles/dist.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#030014] to-[#000000] ${fira.className} whitespace-pre-line text-white`}
      >
        {children}
      </body>
    </html>
  );
}
