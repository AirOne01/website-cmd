import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Surreal from "surrealdb.js";

import BasicPage from "~/components/BasicPage";
import ProjectCard from "~/components/projects/ProjectCard";

const db = new Surreal("http://127.0.0.1:8000/rpc");

type Card = {
  description: string;
  id: string;
  image: string;
  tags: string[];
  title: string;
};

const Projects: NextPage = () => {
  const [cards, setCards] = useState<Card[]>([]);

  dbActions()
    .then((dbCards) => {
      setCards(dbCards);
    })
    .catch(() => {
      console.log("There was an error communicating with the database");
    });

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="My portfolio - My projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicPage>
        <h1 className="mb-8 text-3xl font-bold">My projects</h1>
        <section>
          {cards.map((card, index) => (
            <ProjectCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              tags={card.tags}
            />
          ))}
        </section>
      </BasicPage>
    </>
  );
};

export default Projects;

async function dbActions(): Promise<Card[]> {
  const {
    SURREALDB_USER: user,
    SURREALDB_PASS: pass,
    SURREALDB_DB: dbName,
    SURREALDB_NS: ns,
  } = process.env;

  await db.signin({
    user: user ?? "root",
    pass: pass ?? "root",
  });
  await db.use(ns ?? "ns", dbName ?? "db");

  return await db.select("project");
}
