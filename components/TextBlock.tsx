interface ITextBlock {
  header: string;
  content: string;
  footer: string;
}

const TextBlock = ({ header, content, footer }: ITextBlock) => {
  return (
    <section className="flex flex-col align-center justify-center text-center my-8">
      <h1 className="p-4 font-bold">{header}</h1>
      <p>{content}</p>
      <footer className="p-4 uppercase font-bold">{footer}</footer>
    </section>
  );
};

export default TextBlock;
