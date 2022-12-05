import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Themes from "./styles/Theme";
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
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("dark");
  console.log(mode);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Themes[mode]}>
        <Header />
        <main>
          <Home mode={mode} setMode={setMode} />
          <About />
          <Skills />
          <Services />
          {/* <Qualification /> */}
          <Projects />
          {/* <Testimonials /> */}
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </ThemeProvider>
    </>
  );
}

export default App;
