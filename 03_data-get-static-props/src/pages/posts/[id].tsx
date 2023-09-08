import Head from 'next/head';
import { Post } from '@prisma/client';
import { findPost, findPosts } from '@/sources/queries';
import Layout from '@/components/layout';

export default function Page({ post }: { post: Post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Layout>
        <article className="mx-2 my-8">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.content}</p>
        </article>
      </Layout>
    </>
  );
}

interface StaticProps {
  params: { id: string };
}

export async function getStaticPaths() {
  const posts = await findPosts();
  const paths = posts.map((post) => ({ params: { id: `${post.id}` } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: StaticProps) {
  return { props: { post: await findPost(+params.id) } };
}
