import Typography from "../atom/Typography";
import Card from "../molecule/Card";

type Props = {
  title: string;
  description: React.ReactNode;
  packages: { name: string; price: string }[];
};

function PriceItem({ title, description, packages }: Props) {
  return (
    <Card>
      <div>
        <Typography component="h3">{title}</Typography>
        <div className="markdown flex flex-col gap-3">{description}</div>
      </div>
      <div className="pt-6">
        {packages.map((pkg, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <Typography component="span" className="text-sm">
              {pkg.name}
            </Typography>
            <Typography component="span" className="font-numerical text-2xl">
              {pkg.price}
            </Typography>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default PriceItem;
