import ProjectCard from "components/project/ProjectCard";
import { selectProjects, selectTags, type Tag } from "~/db";

async function Projects() {
  const cards = await selectProjects();
  const tags = await selectTags();

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="mb-8 text-3xl font-bold">My projects</h1>
      <section className="flex gap-10">
        {cards.map((card, index) => {
          return <ProjectCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            tags={
              card.tags.map((actualTag) => {
                const tag = tags.find((tag) => tag.id === actualTag.id);
                if (tag) {
                  return tag;
                } else {
                  console.log(tags);
                  console.log(actualTag);
                }
              }) as Tag[]
            }
          />
        })}
      </section>
    </main>
  );
}

export default Projects;
