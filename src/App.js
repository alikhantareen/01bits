import Navbar from "./components/Navbar";
import FrontCover  from "./components/FrontCover";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <header className="sticky top-0">
        <Navbar />
      </header>
      <main>
        <FrontCover />
      </main>
    </div>
  );
}

export default App;
