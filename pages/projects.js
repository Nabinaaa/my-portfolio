import Link from 'next/link';
import Head from 'next/head';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects I've worked on" />
      </Head>
      <header>
        <h1>My Projects</h1>
        <nav>
          <Link href="/">Back to Home</Link>
        </nav>
      </header>
      <main>
        <section>
          <h2>Project 1</h2>
          <p>Project description goes here. This is a brief overview of what the project is about.</p>
        </section>
        <section>
          <h2>Project 2</h2>
          <p>Project description goes here. This is another project that showcases my skills and experience.</p>
        </section>
      </main>
    </div>
  );
}
