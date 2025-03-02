import "./App.css";
import LandingPage from "./pages/LandingPage";
import About from "./components/About/About";
import News from "./components/News/News";
import Services from "./components/Services/Services";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <LandingPage />
      <About />
      <News />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
