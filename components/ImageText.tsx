interface IImageText {
  title: string;
  content: string;
}

const ImageText = ({ title, content }: IImageText) => {
  return (
    <div className="absolute left-1/2 bottom-10 w-full -translate-x-1/2 text-center">
      <div className="flex flex-col justify-between">
        <h1 className="font-fraunces font-black text-4xl text-dark-blue">
          {title}
        </h1>
        <p className="m-6 text-sm font-barlow text-dark-blue">{content}</p>
      </div>
    </div>
  );
};

export default ImageText;
