import styles from "./TextBlock.module.scss";

interface ITextBlock {
  header: string;
  content: string;
  footer: string;
  footerColor: string;
}

const TextBlock = ({ header, content, footer, footerColor }: ITextBlock) => {
  const yellowClassNames = `${styles.footer} p-4 uppercase font-black font-fraunces after:bg-yellow after:border-bg-yellow after:bg-opacity-30 cursor-pointer`;
  const redClassNames = `${styles.footer} p-4 uppercase font-black font-fraunces after:bg-soft-red after:border-bg-soft-red after:bg-opacity-30 cursor-pointer`;
  return (
    <section className="flex flex-col align-center justify-center text-center my-8">
      <h1 className="p-4 font-black font-fraunces text-3xl">{header}</h1>
      <p className="p-4 font-fraunces text-very-dark-gray-blue">{content}</p>
      <span
        className={footerColor === "yellow" ? yellowClassNames : redClassNames}
      >
        {footer}
      </span>
    </section>
  );
};

export default TextBlock;
