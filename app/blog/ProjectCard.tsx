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
    <div className="relative flex flex-col rounded-md md:w-96 border border-[#333] bg-black mx-4">
      <figure className="aspect-video rounded-t-md">
        <Image
          src={`/posts-images/covers/${image}`}
          width={500}
          height={281}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex flex-col p-4 gap-2 border-t border-[#333]">
        <Link href={`blog/${slug}`} className="flex w-full flex-row">
          <h2 className="text-lg font-bold">{title}</h2>
          {addDays(mdDate, 30) > currentDate ? (
            <div className="flex justify-center items-center rounded-full border-2 border-[#333] px-2 ml-4 text-sm">
              NEW
            </div>
          ) : (
            ""
          )}
        </Link>
        <p>{description}</p>
        <div className="flex flex-wrap items-start gap-2 justify-end">
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
