import { z } from "zod";

const PostMetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(),
  date: z.string()
})

type PostMetadata = z.infer<typeof PostMetadataSchema>

interface PostMetadataWithSlug extends PostMetadata {
  slug: string;
}

export { type PostMetadata, type PostMetadataWithSlug, PostMetadataSchema };