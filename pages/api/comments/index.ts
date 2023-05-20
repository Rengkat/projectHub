import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sanity/client";
type data = Comment[];
interface Comment {
  firstName: string;
  surname: string;
  institution: string;
  comment: string;
}
//

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID, //"igg8dt7d",
  dataset: process.env.SANITY_DATASET, //"production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: process.env.SANITY_API_VERSION, //"2021-10-21", // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_API_TOKEN,
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
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
