import Link from 'next/link';
import Head from 'next/head';
import Layout from '@/components/layout';
import { usePosts } from '@/sources/hooks';

export default function Page() {
  const posts = usePosts();

  return (
    <>
      <Head>
        <title>Hello, world!</title>
      </Head>
      <Layout>
        {posts.map((post) => (
          <article key={post.id} className="mx-2 my-8">
            <h2 className="font-bold">
              <Link className="underline" href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </h2>
            <p>{post.content}</p>
          </article>
        ))}
      </Layout>
    </>
  );
}
