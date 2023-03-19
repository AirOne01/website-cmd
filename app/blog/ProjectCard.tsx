import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
//   tags: Tag[];
};

const ProjectCard = ({ slug, title, description, image }: ProjectCardProps) => {
  return (
    <div className="card w-96 bg-[#18171f]">
      <figure className="border border-[#272632] border-b-transparent aspect-video">
        <Image src={image} width={500} height={500} alt={title} />
      </figure>
      <div className="card-body">
        <Link href={`blog/${slug}`}>
          <h2 className="card-title">
            {title}
            {/* <div className="badge badge-secondary">NEW</div> */}
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