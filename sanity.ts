import { createClient } from "next-sanity";
const projectId = process.env.SANITY_PROJECT_ID; // "igg8dt7d"; // process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // "pv8y60vp"
const dataset = process.env.SANITY_DATASET; //"production"; //process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
const apiVersion = process.env.SANITY_API_VERSION; //"2021-10-21"; //process.env.NEXT_PUBLIC_SANITY_API_VERSION; // "2022-11-16"

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});
