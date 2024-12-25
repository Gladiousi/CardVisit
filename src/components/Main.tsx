import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Main = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "HTML", level: 9 },
    { name: "CSS", level: 8 },
    { name: "TailwindCSS", level: 8 },
    { name: "JavaScript", level: 9 },
    { name: "React", level: 9 },
    { name: "Next.js", level: 7 },
    { name: "Zustand", level: 7 },
    { name: "Redux", level: 7 },
    { name: "API Integration", level: 8 },
    { name: "Node.js", level: 7 },
  ];

  return (
    <section id="skills" className="px-24 py-8 mb-[10%]">
      <h2 className="text-3xl font-bold mb-6">
        {language === "en" ? "My Skills" : "Мои навыки"}
      </h2>
      <div>
        {skills.map((skill) => (
          <div key={skill.name} className="mb-6">
            <p className="font-semibold">{skill.name}</p>
            <div className="relative w-full h-3 bg-gray-300 rounded-full">
              <div
                className={`absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-1000`}
                style={{
                  width: isVisible ? `${skill.level * 10}%` : "0%",
                }}
              ></div>
            </div>
            <p className="mt-2 text-sm">{skill.level}/10</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
