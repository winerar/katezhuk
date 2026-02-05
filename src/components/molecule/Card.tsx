import Glass from "../atom/Glass";

type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return (
    <div className="">
      <Glass type="offset">
        <div className="text-platinum p-6">{children}</div>
      </Glass>
    </div>
  );
}

export default Card;
