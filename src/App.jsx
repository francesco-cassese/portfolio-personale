import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import CursorGlow from "./components/CursorGlow";

function App() {

  return (
    <>
      <a href="#top" className="skip-link">Vai al contenuto principale</a>
      <CursorGlow />
      <Navbar />
      <main>
        <div className="container" id="top">
          <Hero />
          <Journey />
          <Skills />
        </div>
        <Projects />
        <div className="container">
          <Contacts />
        </div>
      </main>
    </>
  );
}

export default App;