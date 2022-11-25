import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { colors } from "./styles/Theme";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
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
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
