import Typography from "../atom/Typography";
import Card from "../molecule/Card";

type Props = {
  title: string;
  description: string;
  price: string;
};

function PriceItem({ title, description, price }: Props) {
  return (
    <Card>
      <Typography component="h3">{title}</Typography>
      <Typography component="p">{description}</Typography>
      <div className="flex justify-end">
        <Typography component="span" className="text-lg">
          {price}
        </Typography>
      </div>
    </Card>
  );
}

export default PriceItem;
