import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Connect from "../components/Connect";

const Home = () => {
  return (
    <>
      <main id="main-content">
        <Hero />
        <Projects />
        <TechStack />
        <Connect />
      </main>
    </>
  );
};

export default Home;
