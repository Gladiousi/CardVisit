import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();
  
  return (
    <section id="about" className="flex justify-center items-center min-h-screen">
      <div className="flex w-[70%] px-12 py-8">
        <div className="w-1/3">
          <img
            src=""
            alt="My photo"
            className="rounded-full w-full object-cover"
          />
        </div>
        <div className="w-2/3 pl-12">
          <h1 className="text-3xl font-bold">
            {language === "en" ? "Abramov Daniil" : "Абрамов Даниил"}
          </h1>
          <p className="mt-2 text-lg">
            {language === "en" ? "Age: 18 years" : "Возраст: 18 лет"}
          </p>
          <p className="mt-2 text-lg">
            {language === "en" ? "City: Moscow" : "Город: Москва"}
          </p>
          <p className="mt-4">
            {language === "en"
              ? "A brief description about me. I'm passionate about programming and creating various projects."
              : "Краткое описание обо мне. Я увлечен программированием и созданием различных проектов."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
