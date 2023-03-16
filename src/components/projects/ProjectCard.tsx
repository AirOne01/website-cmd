import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const ProjectCard = ({ title, description, image, tags }: ProjectCardProps) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <Image
          // src="https://images.unsplash.com/photo-1677297680558-df5641e505ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
          src={image}
          width={500}
          height={500}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {tags.map((tag, index) => (
            <div className="badge badge-outline" key={index}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;