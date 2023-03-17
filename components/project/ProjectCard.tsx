import Image from "next/image";
import { type Tag } from "~/db";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: Tag[];
};

const ProjectCard = ({ title, description, image, tags }: ProjectCardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={image} width={500} height={500} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {tags.map((tag, index) => {
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
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
