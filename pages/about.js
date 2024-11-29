import Link from 'next/link';
import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About me and my journey" />
      </Head>
      <header>
        <h1>About Me</h1>
        <nav>
          <Link href="/">Back to Home</Link>
        </nav>
      </header>
      <main>
        <section>
          <h2>Who I Am</h2>
          <p>I'm a passionate developer who loves coding and problem-solving. I have a background in web development and enjoy learning new technologies.</p>
        </section>
      </main>
    </div>
  );
}
