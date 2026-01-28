type Props = {
  children: React.ReactNode;
  type?: "normal" | "offset";
};

function Glass({ children, type = "normal" }: Props) {
  return (
    <div
      className={`shadow-effect ${type === "offset" && "shadow-effect-offset"}`}
    >
      <div
        className={`backdrop-glass ${type === "offset" && "backdrop-glass-offset"}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Glass;
