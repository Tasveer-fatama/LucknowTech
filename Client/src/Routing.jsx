import React from "react";
import Home from "./pages/Home.jsx";
import HeroBlog from "./components/HeroBlog.jsx"; // Adjust the import path
import BlogDetail from "./components/BlogDetail.jsx"; // Create BlogDetail component
import Career from "./components/Career.jsx"; // Create BlogDetail component
import ModelForm from "./components/ModelForm.jsx"; // Create BlogDetail component
import ServicesSection from "./components/ServicesSection.jsx"; // Create BlogDetail component
import Projects from "./components/Projects.jsx"; // Create BlogDetail component
import AboutUs from "./components/AboutUs.jsx"; // Create BlogDetail component
import NotFound from "./components/NotFound.jsx"; // Create BlogDetail component
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/career" element={<Career />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ModelForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/blog/digital-marketing-strategies"
          element={<BlogDetail title="Digital Marketing Strategies" />}
        />
        <Route
          path="/blog/growth-hackers-playbook"
          element={<BlogDetail title="Growth Hacker's Playbook" />}
        />
        <Route
          path="/blog/seo-best-practices"
          element={<BlogDetail title="SEO Best Practices" />}
        />
        <Route
          path="/blog/social-media-marketing-guide"
          element={<BlogDetail title="Social Media Marketing Guide" />}
        />
        <Route path="/blogs" element={<div>All Blogs Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
