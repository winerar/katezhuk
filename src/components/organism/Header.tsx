import Glass from "../atom/Glass";

function Header() {
  return (
    <header className="text-platinum rounded-xl">
      <Glass type="offset">
        <div className="h-32 lg:h-24 p-6 flex flex-col lg:flex-row items-center justify-between">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          exercitationem totam quis nihil minima, obcaecati vitae nulla,
        </div>
      </Glass>
    </header>
  );
}

export default Header;
