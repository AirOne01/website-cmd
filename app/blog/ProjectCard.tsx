import Image from "next/image";
import Link from "next/link";
import { type PostMetadataWithSlug } from "./PostMetadata";
import addDays from "date-fns/addDays";

const ProjectCard = ({
  slug,
  title,
  description,
  image,
  date,
}: PostMetadataWithSlug) => {
  const mdDate = new Date(Date.parse(date));
  const currentDate = new Date(Date.now());

  return (
    <div className="relative mx-4 flex flex-col rounded-md border border-[#333] bg-black md:w-96">
      <figure className="aspect-video rounded-t-md">
        {image ? (
          <Image
            src={`/posts-images/covers/${image}`}
            width={500}
            height={281}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          ""
        )}
      </figure>
      <div className="flex flex-col gap-2 border-t border-[#333] p-4">
        <Link href={`blog/${slug}`} className="flex w-full flex-row">
          <h2 className="text-lg font-bold">{title}</h2>
          {addDays(mdDate, 30) > currentDate ? (
            <div className="ml-4 flex items-center justify-center rounded-full border-2 border-[#333] px-2 text-sm">
              NEW
            </div>
          ) : (
            ""
          )}
        </Link>
        <p>{description}</p>
        <div className="flex flex-wrap items-start justify-end gap-2">
          {/* {tags.map((tag, index) => {
            const tagColor = tag.color ? "#" + tag.color : undefined;

            return (
              <div
                className="badge-outline badge"
                style={{ borderColor: tagColor, color: tagColor }}
                key={index}
              >
                {tag.title}
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
