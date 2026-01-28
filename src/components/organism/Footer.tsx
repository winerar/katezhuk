import Glass from "../atom/Glass";
import Copyright from "./Copyright";
import Social from "./Social";

function Footer() {
  return (
    <footer className="text-platinum rounded-xl">
      <Glass type="offset">
        <div className="h-32 lg:h-24 p-6 flex flex-col lg:flex-row items-center justify-between">
          <Copyright />
          <Social />
        </div>
      </Glass>
    </footer>
  );
}

export default Footer;
