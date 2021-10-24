import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center text-center md:my-20">
      <h1 className="my-6 mt-14 md:mt-10 tracking-widest text-gray-blue font-black font-fraunces">
        CLIENT TESTIMONIALS
      </h1>
      <div className="flex flex-col md:flex-row md:mx-8">
        <section className="m-6">
          <Image
            className="rounded-full"
            src="/image-emily.jpg"
            alt="header image"
            width={50}
            height={50}
            layout="fixed"
          />
          <p className="my-6 font-barlow text-very-dark-desaturated-blue">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <footer className="flex flex-col my-4">
            <span className="font-black font-fraunces my-2">Emily R.</span>
            <span className="font-barlow text-xs text-dark-gray-blue">
              Marketing Director
            </span>
          </footer>
        </section>
        <section className="m-6">
          <Image
            className="rounded-full"
            src="/image-thomas.jpg"
            alt="header image"
            width={50}
            height={50}
            layout="fixed"
          />
          <p className="my-6 font-barlow text-very-dark-desaturated-blue">
            Sunnyside&apos;s enthusiasm coupled with their keen interest in our
            brand&apos;s success made it a satisfying and enjoyable experience.
          </p>
          <footer className="flex flex-col my-4">
            <span className="font-black font-barlow my-2">Thomas S.</span>
            <span className="font-barlow text-xs text-dark-gray-blue">
              Chief Operating Officer
            </span>
          </footer>
        </section>
        <section className="m-6">
          <Image
            className="rounded-full my-4"
            src="/image-jennie.jpg"
            alt="header image"
            width={50}
            height={50}
            layout="fixed"
          />
          <p className="my-6 font-barlow text-very-dark-desaturated-blue">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <footer className="flex flex-col my-4">
            <span className="font-black font-barlow my-2">Jennie F.</span>
            <span className="font-barlow text-xs text-dark-gray-blue">
              Business Owner
            </span>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
