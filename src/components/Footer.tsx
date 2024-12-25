import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <footer
      className={`px-8 py-6 mt-16 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      } border-t-2 border-gray-300 dark:border-gray-600 shadow-lg`}
    >
      <div className="flex justify-between items-center">
        <p
          className={`text-center ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {language === "en" ? "Made with love" : "Сделано с любовью"}
        </p>
        <div className="flex items-center space-x-4">
          <span
            className={`text-sm ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {language === "en" ? "Language" : "Язык"}
          </span>
          <select
            value={language}
            onChange={handleLanguageChange}
            className={`px-4 py-2 rounded-lg ${
              theme === "dark"
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-gray-200 text-black border-gray-300"
            } transition-all`}
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
