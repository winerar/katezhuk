import Pricelist from "./Pricelist";
import Profile from "./Profile";

function Main() {
  return (
    <main className="text-black grow flex flex-col gap-6">
      <Profile />
      <Pricelist />
    </main>
  );
}

export default Main;
