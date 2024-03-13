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
      </div>
    </>
  );
}

export default App;
