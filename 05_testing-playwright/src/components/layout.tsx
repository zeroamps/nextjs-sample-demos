import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="px-8">
        <div className="text-9xl font-light underline">
          <Link href="/">Hello, world!</Link>
        </div>
      </header>
      <main className="p-8">{children}</main>
    </>
  );
}
