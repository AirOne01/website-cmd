import ProjectCard from "app/blog/ProjectCard";
import { readdirSync, readFileSync } from "fs";
import { resolve } from "path";
import {
  PostMetadataSchema,
  type PostMetadata,
  type PostMetadataWithSlug,
} from "./PostMetadata";

const getPostsMetadata = (): PostMetadataWithSlug[] => {
  const folder = "public/posts";
  const files = readdirSync(folder);
  const mdPosts = files.filter((file) => file.endsWith(".md"));

  const posts: PostMetadataWithSlug[] = mdPosts.map((fileName) => {
    // const content = "---\ntitle: Hello\ndescription: World\ndate: 2021-01-01\n---\n# Hello World";
    const path = resolve(`${folder}/${fileName}`);
    console.log(path);
    const content = readFileSync(path, "utf-8");
    const { title, description, date, image } = godForbid(content);

    return {
      title,
      description,
      date,
      image,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

// Please don't pay attention to this function
// I feel like I'm doing something wrong
function godForbid(content: string): PostMetadata {
  // parse properties between --- and ---
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const parts = content.split("---")[1]!;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const properties = parts
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => line.split(": "))
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .reduce((acc: any, [key, value]) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-non-null-assertion
      acc[key!] = value;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return acc;
    }, {});
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return PostMetadataSchema.parse(properties);
}

const Blog = () => {
  try {
    return (
      <main className="flex flex-col items-center justify-center">
        <h1 className="mb-8 text-3xl font-bold">Blog posts</h1>
        <section className="flex gap-10">
          {getPostsMetadata().map(
            ({ slug, title, description, date, image }, index) => (
              <ProjectCard
                slug={slug}
                title={title}
                description={description}
                image={image}
                date={date}
                key={index}
              />
            )
          )}
        </section>
      </main>
    );
  } catch (e) {
    console.log(e);
  }
};

export default Blog;
