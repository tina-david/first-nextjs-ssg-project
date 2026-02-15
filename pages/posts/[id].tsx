/* eslint-disable @next/next/no-typos */
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface PostDetailProps {
  post: Post;
}
interface IParam extends ParsedUrlQuery {
  id: string;
}
const PostDetail = ({ post }: PostDetailProps) => {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 ">{post.title}</h1>
       <article className="prose prose-slate lg:prose-xl leading-relaxed text-slate-700">
      {post.body}</article>
      <div className="mt-10 pt-6 border-t border-slate-100">
      <button className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl cursor-pointer"
       onClick={() => router.push("/")}>back home</button> </div>
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  const posts = response.data.slice(0, 5);
  // console.log("posts", posts);
  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<PostDetailProps, IParam> = async (
  context,
) => {
  try {
    const { id } = context.params!;
    const response = await axios.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );

    return {
      props: {
        post: response.data,
      },
    };
  } catch (error) {
    console.error("not found", error);
    return {
      notFound: true,
    };
  }
};

export default PostDetail;
