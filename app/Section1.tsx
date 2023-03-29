import Image from "next/image";

const Section1 = () => (
  <section className="snap-center flex h-screen flex-col items-center justify-center text-4xl font-extrabold">
    <div className="flex h-1/2 w-full items-center justify-start">
      <div className="flex h-full w-1/2 flex-col items-center justify-center bg-[#9D2600] text-black">
        Hello world
      </div>
      <div className="flex h-full w-1/2 flex-col items-center justify-center">
        Hello world
      </div>
    </div>
    <div className="flex h-1/2 w-full items-center justify-start">
      <div className="flex h-full w-1/2 items-center justify-center text-black">
        <div className="relative h-full w-full">
          <div className="absolute left-0 top-0 h-full w-full">
            <Image
              src={"/map.png"}
              width={500}
              height={100}
              alt="Map of Lyon"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute left-0 top-0 flex h-full w-full items-end justify-start">
            <p className="bg-orange-500 px-4">Based in Lyon, France</p>
          </div>
        </div>
      </div>
      <div className="h-full w-1/2 bg-[#202927]"></div>
    </div>
  </section>
);

export default Section1;
