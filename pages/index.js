import Head from 'next/head';
import { About, GetStarted, Hero, Collaborators, Awards } from '../sections';
import { Slider } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>MURL</title>
        <meta
          name="description"
          content="MURL develops smart therapeutic and diagnostic ultrasound techniques for broad clinical themes including cancer, maternal/fetal, and musculoskeletal applications."
        />
        <meta name="keywords" content="MURL, IITH" />
        <meta name="author" content="murl" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <About />
        <GetStarted />
        <Awards />
        <Slider />
        <Collaborators />
        <div className="bg-primary-black h-[.8rem]" />
      </main>
    </>
  );
}
