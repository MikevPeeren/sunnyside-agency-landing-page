import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import TextBlock from "../components/TextBlock";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sunny Side Agency</title>
        <meta name="description" content="Sunny Side Agency" />
        <link rel="icon" href="/favicon-32x32" />
      </Head>

      <main>
        <div className="flex flex-col h-screen">
          <Image
            src="/mobile/image-header.jpg"
            alt="header image"
            width={100}
            height={100}
            layout="responsive"
          />
          <Image
            src="/mobile/image-transform.jpg"
            alt="header image"
            width={100}
            height={100}
            layout="responsive"
          />
          <TextBlock
            header="Transform your brand"
            content="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
            footer="Learn More"
          />
        </div>
      </main>

      <footer />
    </div>
  );
};

export default Home;
