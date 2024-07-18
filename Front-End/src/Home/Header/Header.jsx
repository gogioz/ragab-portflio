function Header(lang) {
  const language = lang.lang.lang;
  return (
    <header className="flex flex-col justify-center items-center pb-10 sm:space-y-6 sm:w-[100%] md:w-[90%] lg:w-[60%] xl:pl-5 xl:space-y-8 4xl:space-y-12 5xl:w-[55%]">
      <h1
        className={`font-${
          language === "en" ? "Amiri" : "Droid"
        }-Bold text-center text-[#2f3232] sm:w-[90%]    ${
          language === "en"
            ? "sm:text-3xl lg:text-4xl  xl:text-5xl  2xl:text-6xl"
            : "sm:text-[28px] lg:text-3xl  xl:text-4xl  2xl:text-5xl"
        }  2xl:w-[80%] 4xl:w-[60%]  2xl:leading-[1.2] `}
        dir={language === "en" ? "" : "rtl"}
      >
        {language === "en"
          ? "Investigative Reporter, Journalist and TV Producer"
          : "مراسل استقصائي، صحفي ومنتج تلفزيوني"}
      </h1>

      <p
        className={` font-${
          language === "en" ? "Amiri" : "Droid"
        }-Regular text-[#2f3232] ${
          language === "en"
            ? "sm:text-xl 2xl:w-[80%]"
            : "sm:text-[18px] 2xl:w-[90%]"
        }   sm:px-3 md:px-0 xl:text-2xl 4xl:w-[70%]`}
        dir={language === "en" ? "" : "rtl"}
      >
        {language === "en"
          ? "Ahmed Ragab is a television producer and investigative journalist with a sixteen-year track record of producing high-quality print, television, and online reports"
          : "أحمد رجب هو منتج تلفزيوني وصحفي استقصائي يمتلك سجلًا حافلًا يمتد لستة عشر عامًا في إنتاج تقارير عالية الجودة في الصحافة المطبوعة والتلفزيون والإنترنت."}

        <a
          href="about"
          className={`underline ${
            language === "en"
              ? "pl-2 font-Amiri-Regular"
              : "pr-2 font-Droid-Regular"
          } `}
        >
          {language === "en" ? "more" : "للمزيد"}
        </a>
      </p>
    </header>
  );
}

export default Header;
