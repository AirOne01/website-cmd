import { type NextPage } from "next";
import Head from "next/head";

import BasicPage from "~/components/BasicPage";
import ProjectCard from "~/components/projects/ProjectCard";

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="My portfolio - My projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicPage>
        <h1 className="text-3xl font-bold mb-8">My projects</h1>
        <section>
          <ProjectCard
            title="This portfolio"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet lorem."
            image="https://images.unsplash.com/photo-1677297680558-df5641e505ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
            tags={["React", "Next.js", "TailwindCSS"]}
          />
        </section>
      </BasicPage>
    </>
  );
};

export default Projects;
