import Glass from "../atom/Glass";

function Header() {
  return (
    <header className="text-platinum rounded-xl">
      <Glass type="offset">
        <div className="flex h-32 flex-col items-center justify-between p-6 lg:h-24 lg:flex-row">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          exercitationem totam quis nihil minima, obcaecati vitae nulla,
        </div>
      </Glass>
    </header>
  );
}

export default Header;
