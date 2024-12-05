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
          <p>I am a recently graduated computer engineer with a passion for web development.
          I work with HTML, CSS, JavaScript, and React, and I'm learning Node.js.
          As a beginner in this field, I am eager to learn, and build dynamic, responsive websites.
          </p>
        </section>
      </main>
    </div>
  );
}
