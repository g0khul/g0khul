import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Thoughts from "./pages/Thoughts";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-[calc(100vh-2rem)] flex flex-col border-2 border-current m-4 p-[clamp(0.5rem,3vw,2rem)]">
        <Navigation />

        <main className="flex-1 p-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thoughts" element={<Thoughts />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
