import Contact from "./Contact";
import Pricelist from "./Pricelist";
import Profile from "./Profile";

function Main() {
  return (
    <main className="text-black flex-grow py-3 flex flex-col gap-6">
      <Profile />
      <Pricelist />
      <Contact />
    </main>
  );
}

export default Main;
