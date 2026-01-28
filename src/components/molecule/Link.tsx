import Typography from "../atom/Typography";

type Props = {
  href: string;
  title: string;
};

function Link({ href, title }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-platinum font-semibold uppercase text-center w-full lg:w-auto"
    >
      <div className="shadow-effect button-shadow">
        <div className="backdrop-glass button-glass">
          <Typography component="span" className="py-3 px-6 block">
            {title}
          </Typography>
        </div>
      </div>
    </a>
  );
}

export default Link;
