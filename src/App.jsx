import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { colors } from "./styles/Theme";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Projects from "./components/projects/Projects";
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={colors}>
        <Header />
        <main>
          <Home />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </ThemeProvider>
    </>
  );
}

export default App;
