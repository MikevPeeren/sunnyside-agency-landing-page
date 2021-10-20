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
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <div className="flex flex-col h-vh">
          <div className="w-full">
            <Image
              src="/mobile/image-header.jpg"
              alt="header image"
              width={100}
              height={150}
              layout="responsive"
            />
          </div>
          <div className="w-full">
            <Image
              src="/mobile/image-transform.jpg"
              alt="header image"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <TextBlock
            header="Transform your brand"
            content="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
            footer="Learn More"
          />
          <div className="w-full">
            <Image
              src="/mobile/image-stand-out.jpg"
              alt="header image"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <TextBlock
            header="Stand out to the right audience"
            content="Using a collaborative formula of designers, researchers, photographers, videographers and copywriters, we'll build and extend your brand in digital places."
            footer="Learn More"
          />
          <div className="w-full">
            <Image
              src="/mobile/image-graphic-design.jpg"
              alt="header image"
              width={100}
              height={150}
              layout="responsive"
            />
          </div>
          <div className="w-full">
            <Image
              src="/mobile/image-photography.jpg"
              alt="header image"
              width={100}
              height={150}
              layout="responsive"
            />
          </div>
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
          <div className="bg-dark-moderate-cyan h-72 flex flex-col align-center justify-center text-center">
            <h1 className="lowercase font-barlow text-2xl">Sunnyside</h1>
            <h1 className="lowercase font-fraunces text-2xl">Sunnyside</h1>
            <div className="flex flex-row m-6 my-8 justify-between align-center">
              <span>About</span>
              <span>Services</span>
              <span>Projects</span>
            </div>
            <div className="flex flex-row mx-16 my-6 justify-between align-center">
              <Image
                src="/icon-facebook.svg"
                alt="facebook"
                height={20}
                width={20}
              />
              <Image
                src="/icon-instagram.svg"
                alt="instagram"
                height={20}
                width={20}
              />
              <Image
                src="/icon-twitter.svg"
                alt="twitter"
                height={20}
                width={20}
              />
              <Image
                src="/icon-pinterest.svg"
                alt="pinterest"
                height={20}
                width={20}
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
