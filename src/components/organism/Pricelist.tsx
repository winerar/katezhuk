import Typography from "../atom/Typography";
import Link from "../molecule/Link";
import PriceItem from "./PriceItem";
import getContent from "../../assets/data/content";

function Pricelist() {
  const content = getContent();

  return (
    <div>
      <Typography component="h2">{content.priceHeader}</Typography>
      <div className="flex flex-col gap-6">
        <div>
          <Typography component="h3">
            {content.packages.individual.name}
          </Typography>
          <div className="flex flex-col lg:flex-row gap-3 justify-center">
            {content.packages.individual.prices.map(pkg => (
              <PriceItem
                key={pkg.title}
                title={pkg.title}
                description={pkg.description}
                price={pkg.price}
                duration={pkg.duration}
              />
            ))}
          </div>
        </div>
        <div>
          <Typography component="h3">
            {content.packages.couples.name}
          </Typography>
          <div className="flex flex-col lg:flex-row gap-3 justify-center">
            {content.packages.couples.prices.map(pkg => (
              <PriceItem
                key={pkg.title}
                title={pkg.title}
                description={pkg.description}
                price={pkg.price}
                duration={pkg.duration}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center py-6">
        <Link href={content.telegramLink} title="Записаться на консультацию" />
      </div>
    </div>
  );
}

export default Pricelist;
