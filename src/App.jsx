import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="app"
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode && "white",
        transition: "all 1s ease",
      }}
    >
      <Toggle />
      <Intro />
      <hr />
      <About />
      <hr />
      <ProductList />
      <hr />
      <Contact />
    </div>
  );
}

export default App;
