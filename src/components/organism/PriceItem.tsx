import Typography from "../atom/Typography";
import Card from "../molecule/Card";

type Props = {
  title: string;
  description: React.ReactNode;
  price: string;
  duration: string;
};

function PriceItem({ title, description, price, duration }: Props) {
  return (
    <Card>
      <div>
        <Typography component="h3">{title}</Typography>
        <Typography component="p">{description}</Typography>
      </div>
      <div className="flex items-center justify-between pt-6">
        <Typography component="span" className="text-sm">
          {duration}
        </Typography>
        <Typography component="span" className="font-numerical text-2xl">
          {price}
        </Typography>
      </div>
    </Card>
  );
}

export default PriceItem;
