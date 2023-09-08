import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import { usePost } from '@/sources/hooks';

export default function Page() {
  const router = useRouter();
  const post = usePost(router.query.id);

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
