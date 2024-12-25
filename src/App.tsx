import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import About from "./components/About";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
          <Header />
          <Hero />
          <Main />
          <About />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
