import Footer from "./components/organism/Footer";
import Header from "./components/organism/Header";
import Main from "./components/organism/Main";

function App() {
  return (
    <div className="bg-platinum flex flex-col justify-between min-h-screen p-3">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
