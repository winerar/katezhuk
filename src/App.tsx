import Footer from "./components/organism/Footer";
import Header from "./components/organism/Header";
import Main from "./components/organism/Main";

function App() {
  return (
    <div className="bg-platinum font-primary flex flex-col justify-between min-h-screen py-3 px-6">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
