import Markdown from "markdown-to-jsx";
import { readFileSync } from "fs";
import matter from "gray-matter";

type Props = {
  params: {
    slug: string;
  };
};

const getPostsContent = (slug: string): string => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = readFileSync(file, "utf-8");
  return content;
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
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default Post;
