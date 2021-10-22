interface IImageText {
  title: string;
  content: string;
  color: string;
}

const ImageText = ({ title, content, color }: IImageText) => {
  return (
    <div className="absolute left-1/2 bottom-10 w-full md:w-3/4 md:h-[110px] -translate-x-1/2 text-center">
      <div className="flex flex-col justify-between">
        <h1 className={`font-fraunces font-black text-4xl md:text-xl ${color}`}>
          {title}
        </h1>
        <p className={`m-6 text-sm md:text-xs font-barlow ${color}`}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default ImageText;
