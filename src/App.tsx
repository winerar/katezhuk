import Footer from "./components/organism/Footer";
import Header from "./components/organism/Header";
import Main from "./components/organism/Main";

function App() {
  return (
    <div className="bg-platinum font-primary flex flex-col gap-9 justify-between min-h-dvh w-full py-3 px-3 md:px-12 lg:px-24 xl:px-60">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
