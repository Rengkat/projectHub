import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sanity/client";
type data = Comment[];
interface Comment {
  firstName: string;
  surname: string;
  institution: string;
  comment: string;
}

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
  apiVersion: process.env.SANITY_API_VERSION,
});
export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse<data>
) {
  if (req.method === "POST") {
    const { surname, firstName, institution, comment } = req.body;
    const newComment: Comment = await client.create({
      _type: "comment",
      surname,
      firstName,
      institution,
      comment,
    });
    res.status(201).json([newComment]);
  }
}
