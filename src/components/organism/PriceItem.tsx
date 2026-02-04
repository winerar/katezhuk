import Typography from "../atom/Typography";
import Card from "../molecule/Card";

type Props = {
  title: string;
  description: string;
  price: string;
  duration: string;
};

function PriceItem({ title, description, price, duration }: Props) {
  return (
    <Card>
      <Typography component="h3">{title}</Typography>
      <Typography component="p">{description}</Typography>
      <div className="flex justify-between pt-6">
        <Typography component="span">{duration}</Typography>
        <Typography component="span" className="text-2xl font-numerical">
          {price}
        </Typography>
      </div>
    </Card>
  );
}

export default PriceItem;
