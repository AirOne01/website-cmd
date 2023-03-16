import { Fira_Code } from "next/font/google";
const fira = Fira_Code({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

const BasicPage = ({ children }: Props) => (
  <main
    className={`flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#030014] to-[#000000] ${fira.className} whitespace-pre-line text-white`}
  >
    {children}
  </main>
);

export default BasicPage;
