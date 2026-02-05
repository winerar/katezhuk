import Glass from "../atom/Glass";

type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return (
    <div className="min-w-100 flex-1 xl:max-w-xs">
      <Glass type="offset">
        <div className="text-platinum flex h-full flex-col justify-between p-6">
          {children}
        </div>
      </Glass>
    </div>
  );
}

export default Card;
