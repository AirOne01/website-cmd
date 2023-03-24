import Markdown from "markdown-to-jsx";
import { resolve } from "path";
import { readFile } from "fs/promises";
import Loading from "./loading";

type Props = {
  params: {
    slug: string;
  };
};

const getPostsContent = async (slug: string): Promise<string> => {
  const folder = "public/posts/";
  const path = resolve(`${folder}${slug}.md`);
  const content = await readFile(path, "utf-8");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return content.split("---")[2] ?? "";
};

const Post = async ({ params: { slug } }: Props) => {
  // const content = await getPostsContent(slug);
  await new Promise((resolve) => setTimeout(resolve, 1));

  return (
    // <Markdown
    //   options={{
    //     wrapper: "article",
    //     overrides: {
    //       h1: {
    //         props: {
    //           className: "text-3xl font-bold",
    //         },
    //       },
    //       h2: {
    //         props: {
    //           className: "text-2xl font-bold",
    //         },
    //       },
    //       b: {
    //         props: {
    //           className: "blur-bold",
    //         },
    //       },
    //       a: {
    //         props: {
    //           className: "blur-link",
    //         },
    //       },
    //     },
    //   }}
    // >
    //   {content}
    // </Markdown>
    <Loading />
  );
};

export default Post;
