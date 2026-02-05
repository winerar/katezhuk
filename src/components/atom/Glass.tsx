type Props = {
  children: React.ReactNode;
  type?: "normal" | "offset";
};

function Glass({ children, type = "normal" }: Props) {
  return (
    <div
      className={`shadow-effect h-full ${type === "offset" && "shadow-effect-offset"}`}
    >
      <div
        className={`backdrop-glass h-full ${type === "offset" && "backdrop-glass-offset"}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Glass;
