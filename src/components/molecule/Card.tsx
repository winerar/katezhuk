import Glass from "../atom/Glass";

type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return (
    <div className="w-50">
      <Glass>
        <div className="p-3 text-platinum h-100">{children}</div>
      </Glass>
    </div>
  );
}

export default Card;
