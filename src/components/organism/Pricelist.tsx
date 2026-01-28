import Typography from "../atom/Typography";
import Link from "../molecule/Link";
import PriceItem from "./PriceItem";
import content from "@/assets/data/content.json";

function Pricelist() {
  return (
    <div>
      <Typography component="h2">Пакеты консультаций и цены</Typography>
      <div className="flex gap-3 flex-wrap justify-center">
        {content.packages.map(
          (pkg: { title: string; description: string; price: string }) => (
            <PriceItem
              key={pkg.title}
              title={pkg.title}
              description={pkg.description}
              price={pkg.price}
            />
          )
        )}
      </div>
      <div className="flex justify-center py-6">
        <Link href={content.telegramLink} title="Записаться на консультацию" />
      </div>
    </div>
  );
}

export default Pricelist;
