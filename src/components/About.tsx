import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { language } = useLanguage();
  
  return (
    <section id="contact" className="px-24 py-8">
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
            href="https://github.com/yourusername"
            target="_blank"
            className="text-blue-500"
          >
            {language === "en" ? "GitHub" : "GitHub"}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yourusername/"
            target="_blank"
            className="text-blue-500"
          >
            {language === "en" ? "LinkedIn" : "LinkedIn"}
          </a>
        </li>
      </ul>
    </section>
  );
};

export default About;
