import styles from "./TextBlock.module.scss";

interface ITextBlock {
  header: string;
  content: string;
  footer: string;
  footerColor: string;
}

const TextBlock = ({ header, content, footer, footerColor }: ITextBlock) => {
  const yellowClassNames = `${styles.footer} p-4 md:px-10 w-[150px] md:w-[120px] md:text-center mx-auto md:ml-10 uppercase font-black font-fraunces after:bg-yellow after:border-bg-yellow after:bg-opacity-30 cursor-pointer text-base md:text-sm`;
  const redClassNames = `${styles.footer} p-4 md:px-10 w-[150px] md:w-[120px] md:text-center mx-auto md:ml-10 uppercase font-black font-fraunces after:bg-soft-red after:border-bg-soft-red after:bg-opacity-30 cursor-pointer text-base md:text-sm`;
  return (
    <section className="flex flex-col justify-center text-center md:text-left my-8 md:w-2/4 md:order-1">
      <h1 className="p-4 md:px-10 font-black font-fraunces text-3xl">
        {header}
      </h1>
      <p className="p-4 md:px-10 font-fraunces text-very-dark-gray-blue text-base md:text-sm">
        {content}
      </p>
      <span
        className={footerColor === "yellow" ? yellowClassNames : redClassNames}
      >
        {footer}
      </span>
    </section>
  );
};

export default TextBlock;
