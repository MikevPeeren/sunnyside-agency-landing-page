import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="flex flex-col align-center justify-center text-center">
      <h1 className="my-6 tracking-widest text-gray-blue font-semibold">
        CLIENT TESTIMONIALS
      </h1>
      <section className="m-6">
        <Image
          className="rounded-full"
          src="/image-emily.jpg"
          alt="header image"
          width={50}
          height={50}
          layout="fixed"
        />
        <p className="my-6">
          We put pour trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </p>
        <footer className="flex flex-col my-4">
          <span className="font-bold">Emily R.</span>
          <span className="text-">Marketing Director</span>
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
        <p className="my-6">
          Sunnyside&apos;s enthusiasm coupled with their keen interest in our
          brand&apos;s success made it a satisfying and enjoyable experience.
        </p>
        <footer className="flex flex-col my-4">
          <span className="font-bold">Thomas S.</span>
          <span className="text-">Chief Operating Officer</span>
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
        <p className="my-6">
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </p>
        <footer className="flex flex-col my-4">
          <span className="font-bold">Jennie F.</span>
          <span className="text-">Business Owner</span>
        </footer>
      </section>
    </div>
  );
};

export default Testimonials;
