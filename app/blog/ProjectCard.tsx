import Image from "next/image";
import Link from "next/link";
import { type PostMetadataWithSlug } from "./PostMetadata";
import addDays from 'date-fns/addDays';

const ProjectCard = ({
  slug,
  title,
  description,
  image,
  date,
}: PostMetadataWithSlug) => {
  const mdSeconds = new Date(Date.parse(date));

  return (
    <div className="card w-96 bg-[#18171f]">
      <figure className="aspect-video border border-[#272632] border-b-transparent">
        <Image
          src={`/posts-images/covers/${image}`}
          width={500}
          height={500}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <Link href={`blog/${slug}`}>
          <h2 className="card-title">
            {title}
            {addDays(mdSeconds, 30) > new Date(Date.now()) ? (
              <div className="badge-secondary badge">NEW</div>
            ) : (
              ""
            )}
          </h2>
        </Link>
        <p>{description}</p>
        <div className="card-actions justify-end">
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
