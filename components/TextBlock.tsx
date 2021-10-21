import styles from "./TextBlock.module.scss";

interface ITextBlock {
  header: string;
  content: string;
  footer: string;
  footerColor: string;
}

const TextBlock = ({ header, content, footer, footerColor }: ITextBlock) => {
  const afterRedBG = `after:bg-yellow`;
  const afterRedBorderBG = `after:border-bg-soft-red`;

  return (
    <section className="flex flex-col align-center justify-center text-center my-8">
      <h1 className="p-4 font-black font-fraunces text-3xl">{header}</h1>
      <p className="p-4 font-fraunces text-very-dark-gray-blue">{content}</p>
      <span
        className={`${styles.footer} p-4 uppercase font-black font-fraunces after:bg-soft-red after:border-bg-soft-red after:bg-opacity-30`}
      >
        {footer}
      </span>
    </section>
  );
};

export default TextBlock;
