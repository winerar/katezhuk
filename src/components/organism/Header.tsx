import Glass from "../atom/Glass";

function Header() {
  return (
    <header className="text-platinum rounded-xl">
      <Glass>
        <div className="flex h-18 flex-col items-center justify-between p-6 lg:flex-row">
          Бог умер - Фридрих Ницше
        </div>
      </Glass>
    </header>
  );
}

export default Header;
