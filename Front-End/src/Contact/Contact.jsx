function Contact(lang) {
  const language = lang.lang;
  return (
    <div
      className={`flex justify-center items-center sm:py-0 ${
        language === "en" ? "5xl:py-2" : "5xl:py-3"
      }  `}
    >
      <div
        className={`flex flex-col items-center bg-[#ebebec] sm:space-y-3   sm:py-7 ${
          language === "en" ? "md:py-9" : "md:py-8"
        }    w-full   sm:pt-[5rem] md:pt-[6.5rem]  xl:pt-[8rem]`}
      >
        <h2
          className={`font-${
            language === "en" ? "Amiri" : "Droid"
          }-Bold text-center 5xl:py-10 ${
            language === "en" ? "sm:py-2.5 sm:pb-8" : "sm:py-0 sm:pb-7"
          } sm:text-4xl md:py-1 lg:py-0   text-2xl py-1 2xl:py-1   text-[#1e1e1f]   3xl:py-10 3xl:text-5xl lg:text-4xl  `}
        >
          {language === "en" ? "Keep in touch" : "تواصل مع رجب "}
        </h2>
        <form
          action=""
          className="w-full px-4 sm:pb-4 sm:pb-5.5 md:pb-4 flex flex-col 3xl:space-y-9 xl:w-[50%] 2xl:w-[40%] 2xl:justify-around sm:space-y-7"
          dir={language === "en" ? "ltr" : "rtl"}
        >
          <label
            htmlFor="name"
            className={`sm:text-xl sm:text-[22px] flex flex-col 5xl:text-2xl  font-${
              language === "en" ? "Amiri" : "Droid"
            }-Regular`}
          >
            {language === "en" ? "Name" : "الأسم"}
            <input
              className={`mt-2 bg-white w-full border border-[#212529] rounded-md py-2 ${
                language === "en" ? "pl-2" : "pr-2"
              } focus:outline-none sm:py-1`}
              type="text"
              id="name"
              name="name"
              required
              autoComplete="false"
            />
          </label>
          <label
            htmlFor="email"
            className={`sm:text-xl sm:text-[22px] flex flex-col space-y-3 5xl:text-2xl  font-${
              language === "en" ? "Amiri" : "Droid"
            }-Regular`}
          >
            {language === "en" ? "Email" : "الأيميل"}
            <input
              className={`mt-2 bg-white w-full border border-[#212529] rounded-md py-2 ${
                language === "en" ? "pl-2" : "pr-2"
              } focus:outline-none  sm:py-1`}
              type="text"
              id="email"
              name="email"
              required
              autoComplete="email"
            />
          </label>
          <label
            htmlFor="details"
            className={`sm:text-xl sm:text-[22px] flex flex-col space-y-3 5xl:text-2xl  font-${
              language === "en" ? "Amiri" : "Droid"
            }-Regular`}
          >
            {language === "en" ? "Details" : "التفاصيل"}
            <textarea
              rows={5}
              cols={40}
              className={`mt-2 bg-white w-full border border-[#212529] rounded-md py-2 ${
                language === "en" ? "pl-2" : "pr-2"
              } focus:outline-none sm:py-1`}
              autoComplete="false"
              type="text"
              id="details"
              name="details"
              required
            ></textarea>
          </label>
          <button
            className={`sm:text-lg w-full p-2 font-${
              language === "en" ? "Amiri" : "Droid"
            }-Regular text-2xl rounded-md bg-[#212529] text-white self-center hover:-translate-y-0.5 transation duration-150  hover:cursor-pointer  lg:w-[30%] sm:w-[50%]`}
          >
            {language === "en" ? "Submit" : "أرسل"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
