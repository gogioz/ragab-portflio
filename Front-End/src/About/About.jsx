import img from "../../public/home-2.png";

function About(lang) {
  const language = lang.lang;
  return (
    <div className=" bg-[#ebebec] flex flex-col justify-center items-center sm:pt-[5rem] md:pt-[6.5rem]  xl:pt-[7rem]">
      <h2
        className={`text-center sm:text-4xl py-6 font-${
          language === "en" ? "Amiri" : "Droid"
        }-Bold  text-[#1e1e1f]   xl:py-10 4xl:text-[44px] 5xl:py-7`}
      >
        {language === "en" ? "About Ragab" : "عن رجب"}
      </h2>
      <div
        className={`flex justify-center  sm:flex-col  sm:gap-4  xl:py-4 2xl:py-6 px-4 xl:flex-none  xl:flex-row 2xl:w-[90%] 3xl:w-[80%]  2xl:space-x-8 4xl:py-0   4xl:space-x-0 4xl:pb-4  `}
      >
        <div className={`flex sm:justify-center  sm:items-center `}>
          <img src={img} alt="" className="sm:w-[90%] xl:w-[100%] " />
        </div>
        <div
          className={`w-[100%] flex ${
            language === "en" ? "justify-start items-center" : "justify-center"
          } `}
        >
          {language === "en" ? (
            <p
              className={`font-Amiri-Regular sm:py-2 sm:text-2xl md:text-3xl md:pb-4 lg:w-[90%] xl:text-xl xl:leading-[1.5] 2xl:text-2xl 2xl:leading-[1.2]  2xl:w-[90%]   4xl:text-[28px] 4xl:leading-[1.3]  5xl:text-3xl  4xl:pl-6 md:py-0`}
            >
              Ahmed Ragab is a television producer and investigative journalist
              with a sixteen-year track record of producing high-quality print,
              television, and online reports. <br /> He led the investigations
              unit at Al Masry Al Youm, the largest independent daily newspaper
              in Egypt, and produced the &apos;Sulta5&apos; program on Deutsche
              Welle Arabic. <br /> Ragab received the ARIJ Arab Spring Award for
              Best Investigation in the Arab World in 2011 and has extensively
              covered human rights issues in his reporting. <br /> This includes
              topics such as the prisoners&apos; escape during the 2011 Egyptian
              Revolution, the Anti-Terrorism Law and its impact on
              Egyptians&apos; civil and political rights, and the murder of
              Italian researcher Giulio Regeni in 2016, allegedly by Egyptian
              security officers. <br /> In recent years, he has written and
              produced critically acclaimed podcasts, including the
              investigative podcast series &apos;Ahraz&apos; He also won the
              2023 Mohammed Hassanein Heikal Foundation for Arab Journalism
              Award for the same podcast.
            </p>
          ) : (
            <p
              className={`font-Droid-Regular sm:py-2 sm:text-xl md:text-2xl md:pb-4  lg:text-xl lg:leading-relaxed 2xl:w-[80%] 2xl:leading-[1.5] 3xl:w-[100%]  3xl:text-[22px] 4xl:w-[80%]  4xl:leading-[1.8] 5xl:w-[70%]  5xl:leading-[2]  `}
              dir="rtl"
            >
              أحمد رجب هو منتج تلفزيوني وصحفي استقصائي يمتلك سجلًا حافلًا يمتد
              لستة عشر عامًا في إنتاج تقارير عالية الجودة في الصحافة المطبوعة
              والتلفزيون والإنترنت. <br /> ترأس رجب وحدة التحقيقات في جريدة
              المصري اليوم، أكبر صحيفة يومية مستقلة في مصر، وأنتج برنامج
              &apos;السلطة الخامسة&apos; على دويتشه فيله العربية. <br />
              حصل رجب على جائزة الربيع العربي من شبكة أريج لأفضل تحقيق في العالم
              العربي عام 2011، وقد غطى بشكل واسع قضايا حقوق الإنسان في تقاريره.{" "}
              <br />
              تتضمن هذه المواضيع هروب السجناء أثناء ثورة 2011 المصرية، وقانون
              مكافحة الإرهاب وتأثيره على الحقوق المدنية والسياسية للمصريين، وقتل
              الباحث الإيطالي جوليو ريجيني في عام 2016، الذي يُزعم أنه تم على يد
              ضباط الأمن المصريين. في السنوات الأخيرة، كتب وأنتج برامج بودكاست
              نالت استحسان النقاد، بما في ذلك سلسلة البودكاست الاستقصائية
              &apos;أحراز&apos;. كما فاز بجائزة مؤسسة محمد حسنين هيكل للصحافة
              العربية لعام 2023 عن نفس البودكاست.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
