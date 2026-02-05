import Typography from "../atom/Typography";
import Link from "../molecule/Link";
import PriceItem from "./PriceItem";
import getContent from "../../assets/data/content";
import Markdown from "react-markdown";

function Pricelist() {
  const content = getContent();

  return (
    <section>
      <Typography component="h2">{content.priceHeader}</Typography>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col flex-wrap justify-center gap-3 gap-y-5 lg:flex-row">
          {content.pricelist.map((price) => (
            <PriceItem
              key={price.title}
              title={price.title}
              description={<Markdown>{price.description}</Markdown>}
              price={price.price}
              duration={price.duration}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center py-6">
        <Link href={content.telegramLink} title="Записаться на консультацию" />
      </div>
    </section>
  );
}

export default Pricelist;
