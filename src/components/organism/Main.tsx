import About from "./About";
import Pricelist from "./Pricelist";
import Profile from "./Profile";

function Main() {
  return (
    <main className="text-black flex-grow flex flex-col gap-6">
      <Profile />
      <Pricelist />
      {/* <Contact /> */}
    </main>
  );
}

export default Main;
