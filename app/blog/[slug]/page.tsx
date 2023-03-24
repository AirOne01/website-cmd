import Markdown from "markdown-to-jsx";
import { readFileSync } from "fs";

type Props = {
  params: {
    slug: string;
  };
};

const getPostsContent = (slug: string): string => {
  const folder = "public/posts/";
  const file = `${folder}${slug}.md`;
  const content = readFileSync(file, "utf-8");
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
