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
import Experience from "./pages/experience.tsx";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useState } from "react";
import Skills from "./pages/skills.tsx";
import Blog from "./pages/blog.tsx";

function App() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <Router>
        <ToastContainer />
        <div className="text-dark dark:text-lightSecondary dark:bg-dark bg-light ">
          <button
            className="fixed right-0 z-10 block p-4 mt-4 rounded-l-lg top-20 lg:inline-block lg:mt-0 bg-darkTertiary dark:bg-lightTertiary md:p-6 text-darkPrimary dark:text-lightPrimary hover:opacity-70"
            onClick={() => darkModeHandler()}
          >
            {
              dark && <BsSunFill /> // render sunny when dark is true
            }
            {
              !dark && <BsMoonFill /> // render moon when dark is false
            }
          </button>
          <Navbar />
          <main>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}
export default App;
