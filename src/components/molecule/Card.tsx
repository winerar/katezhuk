import Glass from "../atom/Glass";

type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return (
    <div className="w-full lg:w-80">
      <Glass type="offset">
        <div className="p-6 text-platinum">{children}</div>
      </Glass>
    </div>
  );
}

export default Card;
