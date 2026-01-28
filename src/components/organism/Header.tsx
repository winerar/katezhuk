import Glass from "../atom/Glass";

function Header() {
  return (
    <header className="text-platinum rounded-xl">
      <Glass type="offset">
        <div className="h-32 lg:h-24 p-6 flex flex-col lg:flex-row items-center justify-between">
          Обычно здесь список ссылок, но можно вывести занудную цитату
        </div>
      </Glass>
    </header>
  );
}

export default Header;
