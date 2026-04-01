import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Summary from "./components/Summary";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      <Summary />
      <Contact />
    </div>
  );
}

export default App;
