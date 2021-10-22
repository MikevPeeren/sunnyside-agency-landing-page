import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import TextBlock from "../components/TextBlock";
import Testimonials from "../components/Testimonials";
import ImageText from "../components/ImageText";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sunny Side Agency</title>
        <meta name="description" content="Sunny Side Agency" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <div className="flex flex-col h-vh h-vw overflow-hidden">
          <div className="w-full">
            <Image
              src="/mobile/image-header.jpg"
              alt="header image"
              width={100}
              height={150}
              layout="responsive"
            />
          </div>
          <div className="w-full h-[300px] relative">
            <Image
              src="/mobile/image-transform.jpg"
              alt="header image"
              layout="fill"
            />
          </div>
          <TextBlock
            header="Transform your brand"
            content="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
            footer="Learn More"
            footerColor="yellow"
          />
          <div className="w-full h-[300px] relative">
            <Image
              src="/mobile/image-stand-out.jpg"
              alt="header image"
              layout="fill"
            />
          </div>
          <TextBlock
            header="Stand out to the right audience"
            content="Using a collaborative formula of designers, researchers, photographers, videographers and copywriters, we'll build and extend your brand in digital places."
            footer="Learn More"
            footerColor="soft-red"
          />
          <div className="w-full relative h-[650px]">
            <div className="absolute w-full">
              <div className="w-full h-[650px] relative">
                <Image
                  src="/mobile/image-graphic-design.jpg"
                  alt="header image"
                  layout="fill"
                />
              </div>
            </div>
            <ImageText
              title="Graphic Design"
              content="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention"
            />
          </div>
          <div className="w-full relative h-[650px]">
            <div className="absolute w-full">
              <div className="w-full h-[650px] relative">
                <Image
                  src="/mobile/image-photography.jpg"
                  alt="header image"
                  layout="fill"
                />
              </div>
            </div>
            <ImageText
              title="Photography"
              content="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
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
            <h1 className="lowercase font-barlow font-black text-4xl text-dark-desaturated-cyan">
              Sunnyside
            </h1>
            <div className="flex flex-row m-6 my-8 justify-center align-center text-dark-desaturated-cyan">
              <span className="mx-4">About</span>
              <span className="mx-4">Services</span>
              <span className="mx-4">Projects</span>
            </div>
            <div className="flex flex-row mx-16 my-6 justify-center align-center">
              <div className="mx-1">
                <Image
                  src="/icon-facebook.svg"
                  alt="facebook"
                  height={20}
                  width={20}
                />
              </div>
              <div className="mx-1">
                <Image
                  src="/icon-instagram.svg"
                  alt="instagram"
                  height={20}
                  width={20}
                />
              </div>
              <div className="mx-1">
                <Image
                  src="/icon-twitter.svg"
                  alt="twitter"
                  height={20}
                  width={20}
                />
              </div>
              <div className="mx-1">
                <Image
                  src="/icon-pinterest.svg"
                  alt="pinterest"
                  height={20}
                  width={20}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer />
    </div>
  );
};

export default Home;
