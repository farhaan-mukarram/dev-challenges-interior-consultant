import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="py-5 px-3 lg:px-20 lg:py-12 bg-[#181719] drop-shadow-[0_2px_25px_rgba(0,0,0,0.1)]">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
