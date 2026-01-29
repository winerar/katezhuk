import Glass from "../atom/Glass";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

function Image({ src, alt, className }: Props) {
  return (
    <div className={className}>
      <Glass type="offset">
        <img
          src={src}
          alt={alt}
          className={`rounded-3xl opacity-85 ${className}`}
        />
      </Glass>
    </div>
  );
}

export default Image;
