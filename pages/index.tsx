import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import TextBlock from "../components/TextBlock";
import Testimonials from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sunny Side Agency</title>
        <meta name="description" content="Sunny Side Agency" />
        <link rel="icon" href="/favicon-32x32" />
      </Head>

      <main>
        <div className="flex flex-col h-vh">
          <Image
            src="/mobile/image-header.jpg"
            alt="header image"
            width={100}
            height={150}
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
          <Image
            src="/mobile/image-stand-out.jpg"
            alt="header image"
            width={100}
            height={100}
            layout="responsive"
          />
          <TextBlock
            header="Stand out to the right audience"
            content="Using a collaborative formula of designers, researchers, photographers, videographers and copywriters, we'll build and extend your brand in digital places."
            footer="Learn More"
          />
          <Image
            src="/mobile/image-graphic-design.jpg"
            alt="header image"
            width={100}
            height={150}
            layout="responsive"
          />
          <Image
            src="/mobile/image-photography.jpg"
            alt="header image"
            width={100}
            height={150}
            layout="responsive"
          />
          <Testimonials />
          <div className="flex flex-row w-full">
            <div className="w-2/4">
              <Image
                src="/mobile/image-gallery-milkbottles.jpg"
                alt="header image"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            <div className="w-2/4">
              <Image
                src="/mobile/image-gallery-orange.jpg"
                alt="header image"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="w-2/4">
              <Image
                src="/mobile/image-gallery-cone.jpg"
                alt="header image"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            <div className="w-2/4">
              <Image
                src="/mobile/image-gallery-sugar-cubes.jpg"
                alt="header image"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </main>

      <footer />
    </div>
  );
};

export default Home;
