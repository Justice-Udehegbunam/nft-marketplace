import About from "./components/About";
import About2 from "./components/About2";
import CardsDisplay from "./components/CardsDisplay";
import Hero from "./components/Hero";
import LatestLiveAuctions from "./components/LatestLiveAuctions";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div
        className="text-white text-2xl
      "
      >
        <Nav />
        <Hero />
        <LatestLiveAuctions />
        <About />
        <CardsDisplay />\
        <About2 />
      </div>
    </>
  );
}

export default App;
