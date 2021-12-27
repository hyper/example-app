import Head from 'next/head';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Snow – Hyper</title>
        <meta name="description" content="Add snow to your member portal" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}
