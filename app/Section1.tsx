import Image from "next/image";

const Section1 = () => (
  <section className="flex h-screen snap-center flex-col items-center justify-center text-4xl font-extrabold">
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
      <div className="flex h-full w-1/2 items-end bg-[#FFE3A4]">
        <div className="shrink text-black w-2/3 h-full flex flex-col items-start justify-center gap-10 pl-8">
          <h1 className="text-6xl">IT and me</h1>
          <p className="text-lg font-normal">
            Programming has been a part of my life for as long as I can
            remember. I was introduced to it at a young age and I was
            immediately fascinated by the idea of creating something out of
            nothing. As I grew older, my passion for programming only grew
            stronger. I spent countless hours tinkering with code, learning new
            languages, and building my own projects. Whether it was creating a
            game, developing a website, or automating a task, I always found joy
            in the process of programming. It&apos;s a skill that has served me
            well in both my personal and professional life, and I&apos;m
            grateful for the opportunities it has given me.
          </p>
        </div>
        <Image
          src={"/portrait.png"}
          width={100}
          height={100}
          alt="Picture of me"
          className="max-h-full h-fit w-1/3 object-cover"
        />
      </div>
    </div>
  </section>
);

export default Section1;
