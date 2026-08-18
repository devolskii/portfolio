import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <main className="bg-blood">
      <Navbar />
      <Sidebar />
      <div className="mx-auto lg:w-2/3">
        <Home />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
