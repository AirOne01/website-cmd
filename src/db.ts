import Surreal from "surrealdb.js";

type Card = {
  id: string;
  description: string;
  image: string;
  tags: Tag[];
  title: string;
};

type Tag = {
  id: string;
  title?: string;
  color?: string;
  projects?: string[];
}

const getDb = async () => {
  const db = new Surreal("http://127.0.0.1:8000/rpc");

  const {
    SURREALDB_USER: user,
    SURREALDB_PASS: pass,
    SURREALDB_DB: dbName,
    SURREALDB_NS: ns,
  } = process.env;

  if (
    user === undefined ||
    pass === undefined ||
    dbName === undefined ||
    ns === undefined
  ) {
    throw new Error("There was an error with the environmental variables");
  }

  await db.signin({
    user,
    pass,
  })
  await db.use(ns, dbName)

  return db;
}

async function selectProjects(): Promise<Card[]> {
  const db = await getDb();
  const cards = await db.select("project") as unknown as {
    id: string;
    description: string;
    image: string;
    tags: string[];
    title: string;
  }[]
  return cards.map((card): Card => {
    return {
      ...card, tags: card.tags.map((tag) => {
        return { id: tag }
      })
    };
  });
}

async function selectTags(): Promise<Tag[]> {
  const db = await getDb();
  const tags = await db.select("tag") as unknown as Tag[]
  return tags;
}

export { selectProjects, selectTags, type Tag };