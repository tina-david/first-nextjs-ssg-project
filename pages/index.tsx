import axios from "axios";
import { GetStaticProps } from "next";
import Link from "next/link";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface HomeProps {
  posts: Post[];
}
export default function Home({ posts }: HomeProps) {
  console.log("post", posts);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{ marginBottom: "20px", borderBottom: "1px solid #ccc" }}
          >
            <Link href={`/posts/${post.id}`}>
              <h2  className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 cursor-pointer">{post.title}</h2>
            </Link>

            <p className="prose prose-slate lg:prose-xl leading-relaxed text-slate-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const response = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts",
    );
    const allPosts = response.data;
    const limitedPost = allPosts.slice(0, 5);

    return {
      props: {
        posts: limitedPost,
      },
    };
  } catch (error) {
    console.error("error:", error);
    return { props: { posts: [] } };
  }
};
