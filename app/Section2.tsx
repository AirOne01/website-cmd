import ProjectCard from "./blog/ProjectCard";

const Section2 = () => (
  <section className="flex flex-col items-center justify-center h-screen w-full snap-center bg-black">
    <h1 className="text-4xl font-bold pb-8">Personal projects</h1>
    <main className="grid grid-cols-3 gap-10 w-2/3">
      <ProjectCard title="Portfolio" slug="portfolio" date="" description="This portfolio" image="portfolio2.png"></ProjectCard>
      <ProjectCard title="Proxyster" slug="proxyster" date="" description="A proxy scrapper in Rust" image="proxyster.png"></ProjectCard>
      <ProjectCard title="LiveOverflow Minecraft server" slug="loserver" date="" description="I participated in a Minecraft server mant to introduce hacking" image="lo.jpg"></ProjectCard>
      <ProjectCard title="Codelab" slug="codelab" date="" description="A group of passionate coders" image="codelab.png"></ProjectCard>
      <ProjectCard title="VR in UE 5.2" slug="unrealvr" date="" description="Discovering VR in Unreal Engine 5.2" image="unreal.jpg"></ProjectCard>
      <ProjectCard title="(not ?) Snake game" slug="snake" date="" description="Definitly-not-snake game made as a uni project" image="snake.jpg"></ProjectCard>
    </main>
  </section>
);

export default Section2;
