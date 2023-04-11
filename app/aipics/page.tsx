import Image from "next/image";
import { type MongoDriver } from "@mikro-orm/mongodb";
import { MikroORM } from "@mikro-orm/core";

const AiPics = async () => {
  const orm = await MikroORM.init<MongoDriver>({
    entitiesTs: ['~/entities'], // path to our TS entities
    dbName: 'aipics',
    type: 'mongo',
  });
  console.log(orm.em);

  return <div className="grid grid-cols-7 gap-4 p-4">
    {Array.from({ length: 100 }, (_, i) => i).map((i) => (
      <Image
        alt="Boilerplate image"
        key={i}
        src="https://images.unsplash.com/photo-1680864216112-65b20b633db7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        width={300}
        height={300}
      />
    ))}
  </div>
};

export default AiPics;
