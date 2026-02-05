import Typography from "../atom/Typography";

type Props = {
  title: string;
  titleProps?: {
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
  };
  paragraphs: string[];
};

function ContentBox({ title, titleProps, paragraphs }: Props) {
  return (
    <div className="w-full">
      <Typography
        component={titleProps?.component || "h2"}
        className={titleProps?.className}
      >
        {title}
      </Typography>
      <div className="flex flex-col gap-3">
        {paragraphs.map((paragraph, index) => (
          <Typography component="p" key={index}>
            {paragraph}
          </Typography>
        ))}
      </div>
    </div>
  );
}

export default ContentBox;
