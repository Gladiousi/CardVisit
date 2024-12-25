import { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeLink, setActiveLink] = useState<string>("");
  const { language } = useLanguage();

  const handleLinkClick = (sectionId: string) => {
    setActiveLink(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full px-8 py-6 shadow-md z-10 transition-all ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">Visit</span>
        <div className="flex space-x-8">
          <button
            onClick={() => handleLinkClick("about")}
            className={`px-6 py-2 ${activeLink === "about" ? "text-blue-500" : ""}`}
          >
            {language === "en" ? "About Me" : "Обо мне"}
          </button>
          <button
            onClick={() => handleLinkClick("skills")}
            className={`px-6 py-2 ${activeLink === "skills" ? "text-blue-500" : ""}`}
          >
            {language === "en" ? "Skills" : "Навыки"}
          </button>
          <button
            onClick={() => handleLinkClick("contact")}
            className={`px-6 py-2 ${activeLink === "contact" ? "text-blue-500" : ""}`}
          >
            {language === "en" ? "Contact" : "Контакты"}
          </button>
        </div>
        <button
          onClick={toggleTheme}
          className={`px-6 py-2 rounded-full ${
            theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
          } transition-all`}
        >
          {theme === "dark" ? "🌙" : "🌞"}
        </button>
      </div>
    </header>
  );
};

export default Header;
