import Head from 'next/head';
import { NextPageContext } from 'next';
import { Post } from '@prisma/client';
import { findPost } from '@/sources/queries';
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

export async function getServerSideProps({ query }: NextPageContext) {
  if (!query.id) throw "'query.id' is not defined.";
  return { props: { post: await findPost(+query.id) } };
}
