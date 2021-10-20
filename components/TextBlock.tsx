interface ITextBlock {
  header: string;
  content: string;
  footer: string;
}

const TextBlock = ({ header, content, footer }: ITextBlock) => {
  return (
    <section className="flex flex-col align-center justify-center text-center my-8">
      <h1 className="p-4 font-black font-fraunces text-3xl">{header}</h1>
      <p className="p-4 font-fraunces text-very-dark-gray-blue">{content}</p>
      <footer className="p-4 uppercase font-black font-fraunces">
        {footer}
      </footer>
    </section>
  );
};

export default TextBlock;
