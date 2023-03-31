import { type NextPage } from "next";
import Section0 from "./Section0";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Home: NextPage = () => (
  <div className="scroll-smooth snap-y snap-mandatory overflow-y-scroll h-screen w-screen">
    <Section0 />
    <Section1 />
    <Section2 />
    <Section3 />
  </div>
);

export default Home;
