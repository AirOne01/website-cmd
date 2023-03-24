import Markdown from "markdown-to-jsx";
import { readFileSync } from "fs";
import { resolve } from "path";

type Props = {
  params: {
    slug: string;
  };
};

const getPostsContent = (slug: string): string => {
  const folder = "public/posts/";
  const path = resolve(`${folder}${slug}.md`);
  const content = readFileSync(path, "utf-8");
  return content.split('---')[2] ?? '';
};

const Post = ({ params: { slug } }: Props) => {
  const content = getPostsContent(slug);

  return (
    <Markdown
      options={{
        wrapper: "article",
        overrides: {
          h1: {
            props: {
              className: "text-3xl font-bold",
            },
          },
          h2: {
            props: {
              className: "text-2xl font-bold",
            },
          },
          b: {
            props: {
              className: "blur-bold",
            },
          },
          a: {
            props: {
              className: "blur-link",
            },
          },
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default Post;
