import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <Navbar />

      <Container>
        <Main />
        <Footer />
      </Container>
    </>
  );
};

export default App;
