import { client } from "@/sanity";
import { NextApiRequest, NextApiResponse } from "next";

interface postProps {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  _updatedAt?: string;
}

interface Props {
  post: postProps;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Fetch posts from Sanity.io
    const posts = await client.fetch(`*[_type == "post"]`);

    // Build the sitemap XML string
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Iterate over the fetched posts and add them to the sitemap
    posts.forEach((post: postProps) => {
      xml += `
        <url>
          <loc>http://localhost:3001/posts/${post.slug.current}</loc>
          <lastmod>${post._updatedAt}</lastmod>
        </url>`;
    });

    // Add other static pages to the sitemap
    const staticPages = [
      { url: "/about", lastmod: new Date().toISOString() },
      { url: "/contact", lastmod: new Date().toISOString() },
      { url: "/pricing", lastmod: new Date().toISOString() },
      { url: "/topics", lastmod: new Date().toISOString() },
      { url: "/services", lastmod: new Date().toISOString() },
    ];

    staticPages.forEach((page) => {
      xml += `
        <url>
          <loc>http://localhost:3001${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
        </url>`;
    });

    xml += `
      </urlset>`;

    // Set the response status code and headers
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/xml");
    res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

    // Send the generated sitemap as the response
    res.end(xml);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: "/sitemap.xml",
//         destination: "/api/sitemap",
//       },
//     ];
//   },
// };
