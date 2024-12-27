import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { language } = useLanguage();
  
  return (
    <section id="contact" className="px-24 py-8 relative">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="lines-animation">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="line"></div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-6">
          {language === "en" ? "Contact Information" : "Контактная информация"}
        </h2>
        <p>
          {language === "en" 
            ? "You can contact me through the following channels:" 
            : "Вы можете связаться со мной по следующим каналам:"}
        </p>
        <ul className="mt-4">
          <li>
            <a
              href="https://t.me/wesentlich_17"
              target="_blank"
              className="text-blue-500"
            >
              {language === "en" ? "Telegram" : "Telegram"}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Gladiousi"
              target="_blank"
              className="text-blue-500"
            >
              {language === "en" ? "GitHub" : "GitHub"}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
