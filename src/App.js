import { HashRouter} from "react-router-dom"
import Navbar from "./Components/navbar";
import Home from "./Components/home";
import Skills from "./Components/skills";
import Projects from "./Components/projects";
import Contact from "./Components/contact";

function App() {
  return (
    <HashRouter>
      <main className="relative z-0 bg-ihsan-lighterblue">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Home />
          <Skills />
          <Projects />
          <Contact />
          
        </div>

      </main>
    </HashRouter>
  );
}

export default App;
