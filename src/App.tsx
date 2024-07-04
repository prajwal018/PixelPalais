import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about.tsx";
import Contact from "./pages/contact.tsx";
import Footer from "./components/footer.tsx";
import Home from "./pages/home.tsx";
import Navbar from "./components/navbar.tsx";
import Projects from "./pages/projects.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />

        {/* <div className="bg-primary-100"> */}
        <Navbar />
        <div>
          <main>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}
export default App;
