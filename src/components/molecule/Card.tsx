import Glass from "../atom/Glass";

type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return (
    <div className="flex-1 lg:min-w-md xl:max-w-xs 2xl:min-w-100">
      <Glass type="offset">
        <div className="text-platinum flex h-full flex-col justify-between p-6">
          {children}
        </div>
      </Glass>
    </div>
  );
}

export default Card;
