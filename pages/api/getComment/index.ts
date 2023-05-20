import { client } from "@/sanity";
import { NextApiRequest, NextApiResponse } from "next";

interface Comment {
  _id: string;
  _type: string;
  surname: string;
  firstName: string;
  institution: string;
  comment: string;
}

interface data {
  data: Comment[];
}

export default async function getComments(
  req: NextApiRequest,
  res: NextApiResponse<data>
) {
  if (req.method === "GET") {
    const comments: Comment[] = await client.fetch(
      `*[_type == "comment"] | order(_createdAt desc)`
    );
    res.status(200).json({ data: comments });
  }
}
