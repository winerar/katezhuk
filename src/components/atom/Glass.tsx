type Props = {
  children: React.ReactNode;
};

function Glass({ children }: Props) {
  return (
    <div className="shadow-effect">
      <div className="backdrop-glass">{children}</div>
    </div>
  );
}

export default Glass;
