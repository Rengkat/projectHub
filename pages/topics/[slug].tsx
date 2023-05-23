import { client } from "@/sanity";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import PortableText from "react-portable-text";

interface postProps {
  _id: string;
  title: string;
  abstract?: any;
  chapterOne?: string[];
}
interface Props {
  post: postProps;
}
const DetailTopic = ({ post }: Props) => {
  return (
    <>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post?.title} />
      </Head>
      <div className="w-[90%]  lg:w-[60%] mx-auto my-[5rem]">
        <h1 className="font-bold text-[16px]  lg:text-2xl uppercase py-3 lg:py-5">
          {post?.title}
        </h1>
        {post?.abstract && (
          <>
            <h1 className="font-semibold text-xl lg:text-2xl py-3">Abstract</h1>
            <div className="text-[14px] lg:text-xl text-justify italic">
              {post?.abstract[0]?.children[0]?.text}
            </div>
          </>
        )}
        <div>
          {post?.chapterOne && (
            <>
              {post.chapterOne.map((content: any) => {
                const { _key, title } = content;
                return (
                  <div key={_key}>
                    {title && <h1 className="text-2xl font-bold">{title}</h1>}
                    <PortableText
                      content={content}
                      serializers={{
                        strong: (props: any) => (
                          <h1 className="text-2xl font-bold" {...props} />
                        ),
                      }}
                      className="text-justify py-3"
                    />
                  </div>
                );
              })}
            </>
          )}
        </div>

        <div className="my-2">
          <button className="py-1 px-2 rounded bg-[#db1e00] text-white">
            Get the complete material
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailTopic;

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "post" && defined(slug.current)][].slug.current`;
  const posts = await client.fetch(query);

  const paths = posts?.map((slug: string) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
};
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;

  const query = `*[_type == "post" && slug.current == $slug][0]{
      title, abstract, category,chapterOne
    }`;
  const post = await client.fetch(query, {
    slug: params?.slug,
  });

  return {
    props: {
      post,
    },
    revalidate: 60, //for stale date
  };
};
